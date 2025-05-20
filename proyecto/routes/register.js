const express = require('express');
const router = express.Router();
const registercontroller = require('../controllers/registerController')

router.get('/', registercontroller.register);
//router.post('/', registercontroller.create);

module.exports = router;