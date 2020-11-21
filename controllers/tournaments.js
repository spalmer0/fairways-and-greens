const Tournament = require('../models/tournament');

// DB
require('../config/database');

module.exports = {
    index,
    show
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
    Tournament.findById(req.params.id, function (err, tournament) {
        res.render('tournaments/show', {
            tournament,
            user: req.user
        });
    });
}

const tournaments = [{
    name: 'The Masters',
    logo: 'https://wpde.com/resources/media/261b8725-ad17-452d-a079-b4f79ac51903-large16x9_MastersLogo.jpg?1584108847895',

}, {
    name: 'PGA Championship',
    logo: 'https://images.ctfassets.net/56u5qdsjym8c/4KdUppehLwJc8FbtDfoFw9/467f82306f4eb3f4a7209e11742c0e46/PGA_Championshio_2020.jpg',

}, {
    name: 'The U.S. Open',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a8/2020_U.S._Open_%28golf%29_logo.png',

}, {
    name: 'The Open Championship',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Logo_of_The_Open_Championship.png',

}];



// Tournament.create(tournaments, function(err, docs) {
//     console.log(docs);
// });

// Tournament.deleteMany({}, function(err, response) {
//     console.log(response);
// });

// Tournament.find({}, function(err, docs) {
//     console.log(docs);
// });