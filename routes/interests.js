const express = require('express');
const router = express.Router();
const interestsCtrl = require('../controllers/interests');

// All paths starts with '/interests'.

// GET /interests (index action)
router.get('/', interestsCtrl.index);
// POST /interests (create action)
router.post('/', interestsCtrl.create);


module.exports = router;
