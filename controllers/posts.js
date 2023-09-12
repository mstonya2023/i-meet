const Post = require('../models/post');
module.exports = {
    
    create 

};

async function create(req, res) {
    try {
        await Post.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/posts');
}



