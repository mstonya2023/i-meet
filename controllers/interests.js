const Interest = require('../models/interest');
module.exports = {

 index,
 create

};

async function index(req, res) {
    const movies = await Interest.find({});
    res.render('/interests/index', { title: 'Interests', interests });
  }
 
  async function create(req, res) {
    const Interests = new Interest(req.body);
    // Assign the logged in user's id
    Interest.userRecommending = req.user._id;
    try {
      await Interest.save();
     
      res.redirect('/interests');
    } catch (e) {
      console.log(e.message);
     res.redirect(`/interests`);
    }
  }


