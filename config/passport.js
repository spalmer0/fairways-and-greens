const passport = require('passport');
const Fan = require('../models/fan');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    // a fan has logged in to Google
    Fan.findOne({
        googleId: profile.id
    }, function (err, fan) {
        if (err) return cb(err);
        if (fan) {
            return cb(null, fan) // fan will be added to session (logged into our app)
        } else {
            const newFan = new Fan({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });

            newFan.save(function (err) {
                if (err) return cb(err);
                return cb(null, fan);
            });
        }
    })
}));

passport.serializeUser(function(fan, done) {
    done(null, fan);
});

passport.deserializeUser(function(id, done) {
    Fan.findById(id, function(err, fan) {
        done(err, fan)
    });
});