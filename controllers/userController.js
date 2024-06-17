//const moduloDatos = require("../db/index");

const bcrypt = require('bcryptjs')
const db = require("../database/models");
const {validationResult} = require('express-validator');
const User = db.User;

const userController = {
    showLogin: function(req, res) {
        return res.render('login');
    },

    login: function(req, res){
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            //Procesamos el controlador normalmente
            User.findOne({
                where: [{email : req.body.email }]
            })

            .then(function (response) {
                req.session.user = {
                    usuario: response.usuario,
                    contraseña: response.contraseña
                }
                if (req.body.recordarme){
                    res.cookie('usuarioId', response.id, {maxAge: 1000 * 60 * 30})
                };
                return res.redirect('/');
            })
            .catch(function(error) {
                console.log(error)
            })

        } else{
            res.render('login', ({errors: errors.mapped()}, {old: req.body}));
        }
    },

    showRegister: function(req, res) {
        return res.render('register');
    },
    register: function(req, res){ 
        let errors= validationResult(req);

        let email_usuario = req.body.email
        let nombre_usuario = req.body.usuario
        let contraseña_usuario = req.body.contraseña
        let fecha_usuario = rq.body.fecha_nacimiento
        let dni_usuario = req.body.nro_documento
        let foto_usuario = req.body.foto_perfil

        if(errors.isEmpty()) {
            let userExists = db.User.findOne({ where: { email: email_usuario } });
            if (userExists) {
                return res.render('register', {
                    errors: { email: { msg: 'El email ya está registrado.' } },
                    old: req.body
                })};
        }else {
            res.render('register', ({errors: errors.mapped()}, {old: req.body}));
        }

        db.User.create(form)
            .then(function(result){
            return res.redirect('/login')
        })
        
    },
    
    profile: function(req, res) { 
        let id = 1;
        let usuario = {};
    
        for (let i = 0; i < moduloDatos.usuarios.length; i++){
            if (moduloDatos.usuarios[i].id == id){
                usuario = moduloDatos.usuarios[i]
            }
        }
        let publicaciones = [];
        for (let i = 0; i < moduloDatos.productos.length; i++){
            if (moduloDatos.productos[i].idUsuario == id){
                publicaciones.push(moduloDatos.productos[i])
            }
        }

        return res.render('profile', { usuario: usuario, publicaciones: publicaciones });
    },
    editProfile: function(req, res) {
        let usuario= moduloDatos.usuarios[0];
        return res.render('profile-edit', {usuario:usuario});
    },
};

module.exports = userController;