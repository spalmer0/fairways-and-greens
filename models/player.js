// require our modules
const mongoose = require('mongoose');

// create shortcut variable
const Schema = mongoose.Schema;

// define our tournamentSchema

// define our playerSchema
const playerSchema = new Schema({
    image: {
        data: Buffer,
        contentType: String
    },
    name: {
        type: String
    },
    age: {
        type: Number
    },
    country: {
        type: String
    },
    // winNumber: {
    //     type: Number
    // },
    // tournamentsWon: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Tournament'
    // }]
}, {timestamps: true });




module.exports = mongoose.model('Player', playerSchema);