const Interest = require('../models/interest');
module.exports = {

  index,
  create

};

async function index(req, res) {
  const interests = await Interest.find({});
  res.render('interests/index', { title: 'Interests', interests });
}

async function create(req, res) {
  try {
    await Interest.create(req.body);
  } catch (e) {
    console.log(e.message);
  }
  res.redirect(`/interests`);
}


