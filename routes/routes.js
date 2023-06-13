const express = require('express')

var userController = require('../src/user/userController')
const router = express.Router();
router.route('/user/login').post(userController.loginUser);
router.route('/user/register').post(userController.registerUser);


module.exports = router;