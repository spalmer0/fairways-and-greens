// require modules
const express = require('express');

// initialize a router object
const router = express.Router();

// require players controller
const tournamentsCtrl = require('../controllers/tournaments');


// define our routes
router.get('/', tournamentsCtrl.index);
router.get('/:id', tournamentsCtrl.show);

// export the router object
module.exports = router;    