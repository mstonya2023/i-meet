const Interest = require('../models/interest');
module.exports = {

 index,

};

async function index(req, res) {
    const movies = await interest.find({});
    res.render('/interests', { title: 'Interests', interests });
  }
  



