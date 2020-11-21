const mongoose = require('mongoose');

const fanSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String
}, { timestamps: true });

module.exports = mongoose.model('Fan', fanSchema);