// require our modules and initialize settings variables
const express = require('express');
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');

const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

// load the env vars
require('dotenv').config()

// create the express app
const app = express();

// configure server settings
require('./config/database');
require('./config/passport');

// view engine setup
app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// mount routes
app.use('/', indexRouter);
app.use('/players', playersRouter);

// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});