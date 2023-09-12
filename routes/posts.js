var express = require('express');
var router = express.Router();
const postsCtrl = require ('../controllers/posts');

router.post('/', postsCtrl.create)

module.exports = router;