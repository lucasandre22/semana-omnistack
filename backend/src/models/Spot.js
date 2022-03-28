const mongoose = require('mongoose')

//the information (object) that I want to save from Users
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], //Array
    user: {
        type: mongoose.Schema.Types.ObjectId, //id to user that created this spot
        ref: 'User'
    },
});

module.exports = mongoose.model('Spot', SpotSchema);