// require modules
const express = require('express');

// initialize a router object
const router = express.Router();

// require players controller
const playersCtrl = require('../controllers/players');

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// define our routes
router.get('/', playersCtrl.index);
router.get('/new', playersCtrl.new);
router.get('/:id/update', playersCtrl.updatePlayer);
router.get('/:id', playersCtrl.show);
router.post('/', playersCtrl.create)
router.put('/:id', playersCtrl.update);



// export the router object
module.exports = router;    