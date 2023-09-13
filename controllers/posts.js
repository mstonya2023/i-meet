const Post = require('../models/post');
module.exports = {

    create,
   new: newPost
};

async function newPost(req, res) {
    //Sort performers by their name
    const posts = await Post.find({}).sort('name');
    res.render('posts/new', { title: 'Add Post', posts });
  }

  async function create(req, res) {
    try {
        await Post.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/posts');
}


