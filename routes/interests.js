const express = require('express');
const router = express.Router();
const interestsCtrl = require('../controllers/interests');

// All paths starts with '/' <-- what goes here?

// GET /interests (index action)
router.get('/interests', interestsCtrl.index);
router.post('/interests', interestsCtrl.create);


module.exports = router;
