// require our modules
const mongoose = require('mongoose');

// create shortcut variable
const Schema = mongoose.Schema;

// define our tournamentSchema

// define our playerSchema
const playerSchema = new Schema({
    name: {
        type: String
    },
    dob: {
        type: Date
    },
    country: {
        type: String
    },
    winNumber: {
        type: Number
    },
    tournamentsWon: [{
        type: Schema.Types.ObjectId,
        ref: 'Tournament'
    }]
}, {timestamps: true });

module.exports = mongoose.model('Player', playerSchema);