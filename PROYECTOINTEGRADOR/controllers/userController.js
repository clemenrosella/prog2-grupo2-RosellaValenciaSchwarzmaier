const moduloDatos = require("../db/index");

const userController = {
    login: function(req, res) {
        return res.render('login');
    },
    registro: function(req, res) {
        return res.render('register');
    },
    miPerfil: function(req, res) {
        let id = req.params.id;
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
    

        return res.render('miPerfil', { usuario: usuario, publicaciones: publicaciones });
    },
    editarMiPerfil: function(req, res) {
        return res.render('editarMiPerfil');
    },
};

module.exports = userController;
