const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

router.get('/', loginController.login );
router.post('/', loginController.procesa);


router.get('/logout', loginController.logout)


module.exports = router;
