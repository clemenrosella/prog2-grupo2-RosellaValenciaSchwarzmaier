var express = require('express');
var router = express.Router();
const { body } = require('express-validator');

const userController = require("../controllers/userController");



// Validaciones
const validateRegisterForm = [
    body('email').isEmail().withMessage('Debes completar un email válido'),
    body('usuario').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('contraseña').notEmpty().withMessage('Debes completar el campo de contraseña')
    .isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres.'),
];


/* GET users listing. */
router.get('/login', userController.login);
router.get('/register', userController.showRegister);
router.post('/register', validateRegisterForm, userController.register);
router.get('/profile', userController.profile);
router.get('/editProfile', userController.editProfile);
router.post('/register', userController.store);

module.exports = router;

