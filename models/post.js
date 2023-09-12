const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const postSchema = new Schema({
    interest: {
        type: String,
        enum: ['Bike Riding', 'Movies', 'Wine-tasting','Comedy Shows'],
        default: ['n/a']
    },
    zipcode: {
        type: Number,
        default: ['CAL']
    },
    when: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        },
},

});

// Compile the schema into a model and export it
module.exports = mongoose.model('imeet', postSchema);
