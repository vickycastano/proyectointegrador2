const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

//detalle de producto 
router.get('/product/:id', productoController.detail);

module.exports = router;