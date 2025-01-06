const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};

exports.createPost = async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json(newPost);
};

exports.getPostById = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
};

exports.updatePost = async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
};
