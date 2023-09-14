var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');

// GET /posts/new (new action)
router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);
router.get('/:id', postsCtrl.show);

module.exports = router;
