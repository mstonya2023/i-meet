const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const postSchema = new Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    interests: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }],
    zipcode: {
        type: String,
        match: /\d{5}/
    },
    when: {
        type: Date,
        default: function () {
            return new Date();
        },
    }
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Post', postSchema);
