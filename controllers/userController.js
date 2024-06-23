const bcrypt = require('bcryptjs')
const db = require("../database/models");

const User = db.User;

const { validationResult } = require('express-validator');

const userController = {
    showLogin: function(req, res) {
        if(req.session.user){
            return res.redirect("/user/profile/" + req.session.user.id)
        } else {
            return res.render('login', {errors: []});
        }
    },

    login: function(req, res){
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            
            User.findOne({
                where: {
                    email : req.body.usuario
                }
            })
                .then(function (response) {
                    req.session.user = response
                    if (req.body.recordarme){
                        res.cookie('usuarioId', response.id, { maxAge: 1000 * 60 * 30 })
                    };
                    return res.redirect('/user/profile/' + response.id);
                })
                .catch(function (error) {
                    errors.errors.push(error)
                    return res.render('login', { errors: errors.errors })
                })
            } else {
                return res.render('login', { errors: errors.errors })
            }
        },        

    showRegister: function(req, res) {
        if (req.session.user) {
            return res.redirect("/user/profile/" + req.session.user.id)
        } else {
            return res.render('register', {errors: []});
        } 
    },
    register: function(req, res){ 
        let errors= validationResult(req);

        if(errors.isEmpty()) {
            let nuevo_usuario = req.body;
            nuevo_usuario.contraseña = bcrypt.hashSync(nuevo_usuario.contraseña, 10);
            User.create(nuevo_usuario)
                .then(function (response) {
                    return res.redirect("/user/login");
                })
                .catch(function (error) {
                    errors.errors.push(error)
                    return res.render("register", { errors: errors.errors });
                })
        } else {
            return res.render("register", { errors: errors.errors });
        }
    },
    
    profile: function(req, res) { 
        let id = req.params.id;

        if(id === undefined){
            if (req.session.user) {
                id = req.session.user.id;
            } else {
                return res.redirect('/user/login')
            }
        }
        
        User.findByPk(id, {
                include: [
                    {
                    association: 'productos_usuario', 
                    include: [
                        {
                            association: 'comentarios_producto'
                            }
                        ]
                    }
                ],
                order: [['updatedAt', 'DESC']]
            })
            .then(function(response) {
                if (response) {
                    return res.render('profile', { usuario: response, publicaciones: response.productos_usuario });
                } else {
                    return res.redirect('/')
                }
            })
            .catch(function (error) {
                return res.send(error)
            })

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

       // return res.render('profile', { usuario: objUsuario, publicaciones: publicaciones });
    },
    showEditProfile: function(req, res) {
        if(!req.session.user) {
            return res.redirect("/user/login")
        } else{
            // User.findByPk(req.session.user.id)
            // .then(function (response) {
            //     return res.render('profile-edit', {usuario: response, errores:[]});
            // })
            // .catch(function (error) {
            //     res.send(error)
            // })
            return res.render('profile-edit', { errors: [] });
        }
    },

    
    editProfile: function(req, res) {
        let errors = validationResult(req);
        
        if(errors.isEmpty()){
            let user = req.body;

            User.update(user)
            .then(function(response) {
                return res.redirect("/user/profile" + req.session.user.id)
            })
            .catch(function(error){
                errors.push(error)
                return res.render("profile-edit", { errores: errors })
            }) 
        }else{
            return res.render("profile-edit", { errores: errors.errors })
        }
                
    },

    logout: function (req,res) {
        req.session.destroy();
        res.clearCookie("usuarioId");
        return res.redirect("/");
    },
};

module.exports = userController;