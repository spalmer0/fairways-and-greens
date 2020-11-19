const Player = require('../models/player');

module.exports = {
    index
};

function index(req, res) {
    res.render('players/index');
}