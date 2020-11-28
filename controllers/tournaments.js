const Tournament = require('../models/tournament');

// DB
require('../config/database');

module.exports = {
    index,
    show,
    new: newTournament,
    create
};

function index(req, res) {
    Tournament.find({}, function (err, tournaments) {
        res.render('tournaments/index', {
            tournaments,
            user: req.user
        });
    });
}

function show(req, res) {
    Tournament.findById(req.params.id, function (err, tournaments) {
        res.render('tournaments/show', {
            tournaments,
            user: req.user
        });
    });
}

function newTournament(req, res) {
    Tournament.find({}, function(err, tournaments) {
        res.render('tournaments/new', {
            user: req.user,
            tournaments
        });
    })
}

function create(req, res) {
    
    const tournament = new Tournament(req.body);
    tournament.save(function (err) {
      if (err) return res.redirect('/tournaments/new');
      console.log(tournament);
      res.redirect(`/tournaments/${tournament._id}`);
    });
  }


const tournaments = [{
    name: 'The Masters',
    year: '2020',
    champion: 'Dustin Johnson',
    trophy: 'https://pga.com/_img/masters-trophy_0_0.jpg'

}, {
    name: 'PGA Championship',
    year: '2020',
    champion: 'Colin Morikawa',
    trophy: 'https://www.hamptons.com/gallery/article/1078f.jpg'
}, {
    name: 'The U.S. Open',
    year: '2020',
    champion: 'Bryson DeChambeau',
    trophy: 'https://mediacenter.usga.org/image/us+open+trophy.jpg'
}, {
    name: 'The Masters',
    year: '2019',
    champion: 'Tiger Woods',
    trophy: 'https://pga.com/_img/masters-trophy_0_0.jpg'

}, {
    name: 'PGA Championship',
    year: '2019',
    champion: 'Brooks Koepka',
    trophy: 'https://www.hamptons.com/gallery/article/1078f.jpg'
}, {
    name: 'The U.S. Open',
    year: '2019',
    champion: 'Gary Woodland',
    trophy: 'https://mediacenter.usga.org/image/us+open+trophy.jpg'
}, {
    name: 'The Open Championship',
    year: '2019',
    champion: 'Shane Lowry',
    trophy: 'https://www.impacttrophies.co.uk/content/images/thumbs/0021502_silver-st-andrews-claret-jug.jpeg'
}, {
    name: 'The U.S. Open',
    year: '2018',
    champion: 'Brooks Koepka',
    trophy: 'https://mediacenter.usga.org/image/us+open+trophy.jpg'
}, {
    name: 'The U.S. Open',
    year: '2017',
    champion: 'Brooks Koepka',
    trophy: 'https://mediacenter.usga.org/image/us+open+trophy.jpg'
}, {
    name: 'The U.S. Open',
    year: '2016',
    champion: 'Dustin Johnson',
    trophy: 'https://mediacenter.usga.org/image/us+open+trophy.jpg'
}   ];



// Tournament.create(tournaments, function(err, docs) {
//     console.log(docs);
// });

// Tournament.deleteMany({}, function(err, response) {
//     console.log(response);
// });

// Tournament.find({'champion': 'Dustin Johnson'}, function(err, docs) {
//     console.log(docs);
// });