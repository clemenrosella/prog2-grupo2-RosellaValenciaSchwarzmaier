const moduloDatos = require("../db/index");

const userController = {
    login: function(req, res) {
        return res.render('login');
    },
    register: function(req, res) {
        return res.render('register');
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