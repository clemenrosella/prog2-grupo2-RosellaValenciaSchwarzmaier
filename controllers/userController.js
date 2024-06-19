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

        if(errors.isEmpty()) {
            db.User.create({
                email_usuario: req.body.email,
                nombre_usuario: req.body.usuario,
                contraseña_usuario: bcrypt.hashSync(req.body.contraseña, 10),
                fecha_usuario: req.body.fecha_nacimiento,
                dni_usuario: req.body.nro_documento,
                foto_usuario: req.body.foto_perfil,

            });
            return res.redirect("/");
        }else {

            return res.render("register", {errors: errors.mapped()}, {old:req.body});
        }
    },
    
    profile: function(req, res) { 
        let id = req.params.id;

        if(id === undefined || id === req.session.user.id) { // id == undefined 
             {
            User.findByPk(req.session.user.id, {
                include: [{
                    association: 'productos_usuario', include: [
                        {
                            association: 'comentarios_producto'
                }
            ]
                }],
                order: [['updated_at', 'DESC']]
            })
                .then(function(response) {
                    let objUsuario = {
                        id: response.id,
                        email: response.email,
                        fecha: response.fecha,
                        dni: response.dni,
                        fotoPerfil: response.foto_de_perfil
                    }
                    //res.send(response)
                    return res.render('profile', { usuario: usuario, publicaciones: response.productos_usuario, miPerfil: false });

                })
                .catch(function(error) {
                    return res.send(error)
                })
        }}else {
            User.findByPk(req.session.user.id, {
                include: [
                    {
                        association: 'productos_usuario', include: [
                            {
                                association: 'comentarios_producto'
                    }
                ]
            }
                ],
                order: [['updated_at', 'DESC']]
            })
                .then(function(response) {
                    if(response === null) {
                        res.send("El usuario solicitado no existe.")
                        res.render('error', {error: {}, message: "Ususario no encontrado."})
                    } else {
                        let objUsuario = {
                            id: response.id, 
                            email: response.email,
                            fecha: response.fecha,
                            dni: response.dni,
                            fotoPerfil: response.foto_de_perfil

                        }
                        
                        return res.render('profile', { usuario: objUsuario, publicaciones: response.productos_usuario , miPerfil: false});
                    }
                    //res.send(response)
                })
                .catch(function(error) {
                    return res.send(error)
                })
        }

        // console.log(id);

        // res.send(id)
        
        // let id = 1;
        // let usuario = {};
    
        // for (let i = 0; i < moduloDatos.usuarios.length; i++){
        //     if (moduloDatos.usuarios[i].id == id){
        //         usuario = moduloDatos.usuarios[i]
        //     }
        // }
        // let publicaciones = [];
        // for (let i = 0; i < moduloDatos.productos.length; i++){
        //     if (moduloDatos.productos[i].idUsuario == id){
        //         publicaciones.push(moduloDatos.productos[i])
        //     }
        // }

        return res.render('profile', { usuario: usuario, publicaciones: publicaciones });
    },
    editProfile: function(req, res) {
        let usuario= moduloDatos.usuarios[0];
        return res.render('profile-edit', {usuario:usuario});
    },
    logout: function (req,res) {
        req.session.destroy();
        res.clearCookie("usuarioId");
        return res.redirect("/");
    },
};

module.exports = userController;