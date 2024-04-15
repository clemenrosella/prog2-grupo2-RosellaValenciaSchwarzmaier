var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.registro);
router.get('/miPerfil', userController.miPerfil);
router.get('/editarMiPerfil', userController.editarMiPerfil);

module.exports = router;