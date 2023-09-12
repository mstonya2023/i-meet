var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts');


router.post('/imeet', postsCtrl.create)

module.exports = router;
