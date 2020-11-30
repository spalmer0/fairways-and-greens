const Player = require('../models/player');
const fans = require('../models/fan');
const Tournament = require('../models/tournament');


// DB
require('../config/database');

module.exports = {
    index,
    show,
    new: newPlayer,
    create,
    updatePlayer,
    update,
    delete: deletePlayer
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
        Tournament.find({
                champion: player.name
            },
            function (err, tournaments) {
                res.render('players/show', {
                    playerId: req.params.id,
                    user: req.user,
                    tournaments,
                    player
                });

            }
        )
    });
}

function newPlayer(req, res) {
    res.render('players/new', {
        user: req.user
    });
}

function create(req, res) {

    const player = new Player(req.body);
    player.save(function (err) {
        // one way to handle errors
        if (err) return res.redirect('/players/new');
        console.log(player);
        // for now, redirect right back to new.ejs
        res.redirect(`/players/${player._id}`);
    });
}

function updatePlayer(req, res) {
    // find the original player object
    // render a view with the original player object and an edit form
    Player.findById(req.params.id, function (err, player) {
        res.render('players/update', {
            user: req.user,
            player
        });
    });
}

function update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body,

        function (err, player) {
            if (err) {
                console.log(err);
            } else {
                console.log(player);
            }

        });
    res.redirect(`/players/${req.params.id}`);
}

function deletePlayer(req, res) {
    //let warning = global.confirm(`Are you sure you want to delete this player? This action cannot be undone.`) 
    Player.findByIdAndDelete(req.params.id, function (err, player) {
        if (err) {
            console.log(err);
        } else {
            console.log(player);
        }
    });

    res.redirect('/players');

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