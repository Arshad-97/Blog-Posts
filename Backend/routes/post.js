const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// REQUEST GET ALL POST
router.get("/", (req, res) => {
    Post.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).res.json(`error: ${err}`));
});



module.exports = router;