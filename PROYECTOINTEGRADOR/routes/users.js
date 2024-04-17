var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.profile);
router.get('/editProfile', userController.editProfile);

module.exports = router;

