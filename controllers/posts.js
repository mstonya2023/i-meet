const Post = require('../models/post');
const Interest = require('../models/interest');

module.exports = {
    create,
    new: newPost,
    show,
    index,
    edit,
    update,
    delete: deletePost
};

async function show(req, res) {
    const post = await Post.findById(req.params.id).populate('interests');
    res.render('posts/show', { title: post.title, post });

}

async function newPost(req, res) {
    //Sort interests by their name
    const interests = await Interest.find({}).sort('name');
    res.render('posts/new', { title: 'Add iMeet', interests });
}

async function create(req, res) {
    req.body.user = req.user._id;
    try {
        const post = await Post.create(req.body);
        res.redirect(`/posts/${post._id}`);
    } catch (err) {
        console.log(err);
        res.redirect('/posts/new');
    }
}

async function index(req, res) {
    const posts = await Post.find({});
    res.render('posts/index', { posts, title: 'All iMeets' });
}

async function edit(req, res) {
    const post = await Post.findOne({ _id: req.params.id, user: req.user._id });
    if (!post) return res.redirect('/posts');
    const interests = await Interest.find({}).sort('name');
    res.render('posts/edit', { post, interests, title: 'Edit iMeets' });
}

async function update(req, res) {
    try {
        await Post.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/posts/${req.params.id}`);
}

async function deletePost(req, res) {
    try {
        await Post.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    } catch (err) {
        console.log(err);
    }
    res.redirect('/posts');
}