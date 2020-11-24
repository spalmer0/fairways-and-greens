// require modules
const express = require('express');

// initialize a router object
const router = express.Router();

// require players controller
const playersCtrl = require('../controllers/players');

// POST /memories
router.post('/memories', isLoggedIn, playersCtrl.addMem);

// DELETE /memories/:id
// router.delete('/memories/:id', isLoggedIn, fansCtrl.delMemory);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// define our routes
router.get('/', playersCtrl.index);
router.get('/:id', playersCtrl.show);

// export the router object
module.exports = router;    