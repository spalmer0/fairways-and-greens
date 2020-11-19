// require our modules and initialize settings variables
const express = require('express');
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const indexRouter = require('./routes/index');

const morgan = require('morgan');

// create the express app
const app = express();

// configure server settings
require('./config/database');

app.set('view engine', 'ejs');

// mount middleware
app.use(mogan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});