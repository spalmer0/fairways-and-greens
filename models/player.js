// require our modules
const mongoose = require('mongoose');
const tournaments = require('../controllers/tournaments');

// create shortcut variable
const Schema = mongoose.Schema;

// define our playerSchema
const playerSchema = new Schema({
    playerImg: String,
    name: {
        type: String
    },
    age: {
        type: Number
    },
    country: {
        type: String
    },
    majors: [{
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    }], 
    // wins: tournamentsWon.length
}, {timestamps: true });


module.exports = mongoose.model('Player', playerSchema);