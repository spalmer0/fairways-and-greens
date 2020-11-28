// require modules
const express = require('express');
const tournaments = require('../controllers/tournaments');

// initialize a router object
const router = express.Router();

// require players controller
const tournamentsCtrl = require('../controllers/tournaments');


// define our routes
router.get('/', tournamentsCtrl.index);
router.get('/new', tournamentsCtrl.new);
router.get('/:id', tournamentsCtrl.show);
router.post('/', tournamentsCtrl.create);

// export the router object
module.exports = router;    