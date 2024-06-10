const moduloDatos = require("../db/index");
const db = require("../database/models");
const {validationResult} = require('express-validator');

const userController = {
    login: function(req, res) {
        return res.render('login');
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
    store: function (req, res) {
        let form = req.body;
        db.Usuario.create({
            nombreUsuario: req.body.usuario,
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.password, 10),
            fechaDeNacimiento: req.body.nacimiento,
            dni: req.body.dni,
            fotoPerfil: req.body.fotoPerfil
        });

        res.send(req.body);
    },
};

module.exports = userController;