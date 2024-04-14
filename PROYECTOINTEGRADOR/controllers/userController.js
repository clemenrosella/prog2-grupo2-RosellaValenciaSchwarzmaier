const moduloDatos = require("../db/index");

const userController = {
    login: function(req, res) {
        return res.render('login');
    },
    registro: function(req, res) {
        return res.render('register');
    },
    miPerfil: function(req, res) {
        let usuarios = moduloDatos.usuarios;
        let miUsuario = usuarios[0]; 

        return res.render('profile', { usuario: miUsuario });
    },
    editarMiPerfil: function(req, res) {
        return res.render('profile-edit');
    },
};

module.exports = userController;
