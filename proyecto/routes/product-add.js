const express = require('express');
const router = express.Router();
const productadd = require('../controllers/productaddController')

router.get('/', productadd.productadd);

module.exports = router;