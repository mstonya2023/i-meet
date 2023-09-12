var express = require('express');
var router = express.Router();
const interestsCtrl = require('../controllers/interests');

// All paths starts with "_'/'_______"  <-- what goes here?

// GET /interests (index action)
router.get('/interests', interestsCtrl.index)

module.exports = router;
