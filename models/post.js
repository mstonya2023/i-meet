const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const postSchema = new Schema({
    interests: {
        type: Schema.Types.ObjectId,
        enum: ['Bike Riding', 'Movies', 'Wine-tasting', 'Comedy Shows'],
        default: ['n/a']
    },
    zipcode: {
        type: String,
        default: ['CAL']
    },
    when: {
        type: Date,
        default: function () {
            return new Date();
        },
    },

});

// Compile the schema into a model and export it
module.exports = mongoose.model('Post', postSchema);
