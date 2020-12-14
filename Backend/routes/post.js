const express = require('express');
const posts = require('../models/posts');
const router = express.Router();
const Post = require('../models/posts');

// REQUEST GET ALL POST
router.get("/", (req, res) => {
    Post.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).res.json(`error: ${err}`));
});

// REQUEST ADD NEW POST
router.post("/add", (req, res) => {
    const newPost = posts({
        title: req.body.title,
        post: req.body.post,
        authorname: req.body.authorname
    });

    newPost
        .save()
        .then(() => res.json("Post successfully added !"))
        .catch(err => res.status(400).json(`error: ${err}`));
});

module.exports = router;