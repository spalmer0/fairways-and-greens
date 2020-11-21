// require our modules
const mongoose = require('mongoose');

// create shortcut variable
const Schema = mongoose.Schema;

// define our tournamentSchema
const tournamentSchema = new Schema({
    name: String,
    logo: String,
    // location: String,
    // year: String
    // TODO: Insert trophy image
})


module.exports = mongoose.model('Tournament', tournamentSchema);