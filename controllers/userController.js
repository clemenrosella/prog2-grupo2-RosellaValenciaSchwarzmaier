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

                    if (!bcrypt.compareSync(req.body.contraseña, response.contraseña)) {
                        errors.errors.push("La contraseña es incorrecta")
                        return res.render('login', { errors: errors.errors })
                    } else{
                        req.session.user = response
                        if (req.body.recordarme){
                            res.cookie('usuarioId', response.id, { maxAge: 1000 * 60 * 30 })
                        };
                        return res.redirect('/user/profile/' + response.id);
                    }
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
                order: [['productos_usuario', 'updatedAt', 'DESC']]
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
    },
    showEditProfile: function(req, res) {
        if(!req.session.user) {
            return res.redirect("/user/login")
        } else if (req.session.user.id != req.params.id) {
            return res.redirect("/user/profile/" + req.session.user.id)
        } else {
            return res.render('profile-edit', { errors: [] });
        }
    },

    editProfile: function(req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let user = req.body;

            user.contraseña = bcrypt.hashSync(user.contraseña, 10);

            User.update(user, {
                where: {
                    id: req.session.user.id
                }
            })
                .then(function (response) {
                    return res.redirect("/user/profile/" + req.session.user.id)
                })
                .catch(function (error) {
                    errors.errors.push(error)
                    return res.render("profile-edit", { errores: errors.errors })
                })
        } else {
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