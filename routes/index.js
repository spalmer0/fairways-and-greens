// require our modules
const express = require('express');

// create a router object
const router = express.Router();

// require the controller module
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);

// export the router object
module.exports = router;