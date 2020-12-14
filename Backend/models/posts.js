const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    post: { type: String, required: true },
    authorname: { type: String, required: true }
});

const posts = mongoose.model("posts", postSchema);

module.exports = posts;