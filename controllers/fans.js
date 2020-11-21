const Fan = require('../models/fan');

module.exports = {
    // index,
    addMemory,
    delMemory
};

// function index(req, res) {
//     Fan.find({}, function (err, fans) {
//         res.render('fans/index', {
//             fans,
//             user: req.user
//         });
//     });
// }

function addMemory(req, res) {
    req.user.memories.push(req.body);
    req.user.save(function(err) {
        res.redirect('/fans');
    });
}

function delMemory(req, res) {

}