const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //id to user that created this spot
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //id to user that created this spot
        ref: 'Spot'
    },
});

module.exports = mongoose.model('Booking', BookingSchema);