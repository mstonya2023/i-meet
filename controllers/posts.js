const Post = require('../models/post');
const Interest = require('../models/interest');

module.exports = {
    create,
    new: newPost,
    show
};

async function show(req, res) {
    const post = await Post.findById(req.params.id).populate('interests');
    res.render('posts/show', { title: 'iMeet Details', post });
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


