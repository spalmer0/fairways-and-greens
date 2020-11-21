// require our modules
const router = require('express').Router();
const passport = require('passport');

// login route - when the fan clicks "login with google"
router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
    }
));

// this route is for when google finishes validating fan credentials
// they will use this route to bring the fan back to us
router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
}));

// logout route
router.get('/logout', function(req, res) {
    req.logOut(); // destroy the session and cookie
    res.redirect('/');
});

router.get('/', function (req, res) {
    res.render('index', {
        user: req.user
    });
});

// require the controller module
const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.index);

// export the router object
module.exports = router;