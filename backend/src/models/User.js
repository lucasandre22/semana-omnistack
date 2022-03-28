const mongoose = require('mongoose')

//the information (object) that I want to save from Users
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);