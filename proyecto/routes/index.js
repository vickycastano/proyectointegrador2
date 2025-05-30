const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

// home 
router.get('/', indexController.index);

//busqueda de productos
router.get('/searchresults', indexController.searchresults);

module.exports = router;
