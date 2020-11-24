const router = require('express').Router();
const fansCtrl = require('../controllers/fans');

// GET /fans
router.get('/fans', fansCtrl.index);





module.exports = router;