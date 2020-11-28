const Player = require('../models/player');
const fans = require('../models/fan');
const Tournament = require('../models/tournament');


// DB
require('../config/database');

module.exports = {
    index,
    show,
    new: newPlayer,
    create
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
                    player,
                    user: req.user,
                    tournaments
                });

            }
        )
    });
}

function newPlayer(req, res) {
    res.render('players/new', {
        user: req.user,
        players
    });
  }

  function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
  
    // for (let key in req.body) {
    //   if (req.body[key] === '') delete req.body[key];
    // }
    const player = new Player(req.body);
    player.save(function (err) {
      // one way to handle errors
      if (err) return res.redirect('/players/new');
      console.log(player);
      // for now, redirect right back to new.ejs
      res.redirect(`/players/${player._id}`);
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