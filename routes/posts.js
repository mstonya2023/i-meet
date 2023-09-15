var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');

// GET /posts/new (new action)
router.get('/new', postsCtrl.new);
router.get('/:id', postsCtrl.show);
router.get('/', postsCtrl.index);
router.get('/:id/edit', postsCtrl.edit);
router.post('/', postsCtrl.create);
router.put('/:id', postsCtrl.update);
router.delete('/:id', postsCtrl.delete);


module.exports = router;
