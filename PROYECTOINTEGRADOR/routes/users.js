var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.registro);
router.get('/my-profile', userController.miPerfil);
router.get('/edit-my-profile', userController.editarMiPerfil);

module.exports = router;