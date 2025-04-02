const express = require('express');
const router = express.Router();
const profilecontrollers = require('../controllers/profileController')

router.get('/', profilecontrollers.profile);

module.exports = router;