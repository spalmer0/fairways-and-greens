// require our modules
const mongoose = require('mongoose');

// create shortcut variable
const Schema = mongoose.Schema;

// define our tournamentSchema
const tournamentSchema = new Schema({
    name: String,
    year: String,
    champion: String,
    trophy: String   
    
})


module.exports = mongoose.model('Tournament', tournamentSchema);