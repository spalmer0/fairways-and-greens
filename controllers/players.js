const Player = require('../models/player');
const fans = require('../models/fan');


// DB
require('../config/database');

module.exports = {
    index,
    show,
    addMem
};

function index(req, res) {
    Player.find({}, function (err, players) {
        res.render('players/index', {
            user: req.user,
            players
        });
    });
}


function show(req, res) {
    Player.findById(req.params.id, function (err, player) {
        res.render('players/show', {
            player,
            user: req.user,
            fans
        });
    });
}

function addMem(req, res) {
    req.user.memories.push(req.body);
    req.user.save(function(err) {
        res.redirect('/players/:id');
    });
}

const players = [{
        playerImg: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,f_auto,g_face:center,h_350,q_auto,w_280/headshots_30925.png',
        name: 'Dustin Johnson',
        age: 36,
        country: 'United States'
    },
    {
        playerImg: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,f_auto,g_face:center,h_350,q_auto,w_280/headshots_28237.png',
        name: 'Rory McIlroy',
        age: 31,
        country: 'Northern Ireland'
    },
    {
        playerImg: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,f_auto,g_face:center,h_350,q_auto,w_280/headshots_32102.png',
        name: 'Rickie Fowler',
        age: 31,
        country: 'United States'
    }
];

// Player.create(players, function(err, docs) {
//     console.log(docs);
// });

// Player.deleteMany({}, function(err, response) {
//     console.log(response);
// });

// Player.find({}, function(err, docs) {
//     console.log(docs);
// });