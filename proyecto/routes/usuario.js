const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

//profile
router.get('/profile', usuarioController.profile);
router.get('/profile/:id', usuarioController.profile);

// registro 
router.get('/register', usuarioController.register);
router.post('/register', usuarioController.create);

//login 
router.get('/login', usuarioController.login );
router.post('/login', usuarioController.procesa);

//logout 
router.get('/logout', usuarioController.logout)


module.exports = router;