const express = require('express');
const router = express.Router();
const headerLougeadoController = require('../controllers/headerLougeadoController')

router.get('/', headerLougeadoController.headerLougeado);

module.exports = router;