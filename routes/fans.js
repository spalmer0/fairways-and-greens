const router = require('express').Router();
const fansCtrl = require('../controllers/fans');

// GET /fans
router.get('/fans', fansCtrl.index);

// POST /memories
// We will already have access to the logged in fan on the server, therefore do not use: /fans/:id/memories
router.post('/memories', isLoggedIn, fansCtrl.addMemory);

// DELETE /memories/:id
router.delete('/memories/:id', isLoggedIn, fansCtrl.delMemory);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;