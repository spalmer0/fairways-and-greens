// const Fan = require('../models/fan');

// module.exports = {
//     index,
//     show,
//     addMemory,
//     delMemory
// };

// function index(req, res) {
//     Fan.find({}, function (err, fans) {
//         res.render('fans/index', {
//             fans,
//             user: req.user
//         });
//     });
// }

// function show(req, res) {
//     Fan.findById(req.params.id, function (err, fans) {
//         res.render('players/show', {
//             fans,
//             user: req.user
//         });
//     });
// }

// function addMemory(req, res) {
//     req.user.memories.push(req.body);
//     req.user.save(function(err) {
//         res.redirect('/fans');
//     });
// }

// function delMemory(req, res) {

// }