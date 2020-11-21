// require modules
const express = require('express');

// initialize a router object
const router = express.Router();

// require players controller
const playersCtrl = require('../controllers/players');
// const player = require('../models/player');

// define our routes
router.get('/', playersCtrl.index);
router.get('/:id', playersCtrl.show);

// export the router object
module.exports = router;    