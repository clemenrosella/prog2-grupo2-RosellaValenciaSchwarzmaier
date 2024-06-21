var express = require('express');
var router = express.Router();

const db = require("../database/models");
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');

const userController = require("../controllers/userController");



// Validaciones
const validateRegisterForm = [
    body('email').notEmpty().isEmail().withMessage('Debes completar un email válido')
    .custom(function(value){
        return db.User.findOne({
            where: [{email: value}]
        })
        .then(function(user){
            if(user) {
                throw new Error ("Este email ya esta registrado")
            }
        })
    }),
    body('usuario').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('contraseña').notEmpty().withMessage('Debes completar el campo de contraseña')
    .isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres.'),
];

const validateLoginForm = [
    body('usuario').notEmpty().withMessage('Debes completar el campo de nombre')
    .custom(function (value, {req}) {
        return db.User.findOne({
            where: {
                email : value
            }
        })
        .then(function (user) {
            if(!user){
                throw new Error('El usuario no se encuntra registrado')
            }
        })
        .catch(function (e) {
            console.log(e)
        })
    }
),

    body('contraseña').notEmpty().withMessage('Debes completar el campo de contraseña')
    .isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres.')
    .custom(function (value, {req}) {
        return db.User.findOne({
            where: {
                contraseña : value
            }
        })
        .then(function(response) {
            if(response && !bcrypt.compareSync(value, response.contraseña)){
                throw new Error('La contraseña es incorrecta')
            }
        })

    }),
];


/* GET users listing. */
router.get('/login', userController.showLogin);
router.post('/login', validateLoginForm, userController.login);
router.get('/register', userController.showRegister);
router.post('/register', validateRegisterForm, userController.register);
router.get('/profile/:id?', userController.profile);
router.get('/editProfile', userController.showEditProfile);
router.post('/editProfile', userController.editProfile);
router.post("/logout", userController.logout);

module.exports = router;

