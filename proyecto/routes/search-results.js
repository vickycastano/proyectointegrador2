const express = require('express');
const router = express.Router();
const searchresultscontrollers = require('../controllers/searchresultsController')

router.get('/', searchresultscontrollers.profile);

module.exports = router;