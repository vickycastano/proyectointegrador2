const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController')

//detalle de producto 
router.get('/product/:id', productoController.detail);

router.get('/productadd',productoController.productadd);
router.post('/productadd', productoController.nuevoproducto);

router.post('/comentar/:id', productoController.comentar);

module.exports = router;