const express = require('express');
const router = express.Router();
const registercontrollers = require('../controllers/registerController')

router.get('/', registercontrollers.register);

module.exports = router;