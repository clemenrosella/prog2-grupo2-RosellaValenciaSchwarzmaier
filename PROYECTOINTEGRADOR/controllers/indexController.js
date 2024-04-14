const moduloDatos = require('../db/index');

const indexController = {
    home: function (req, res) {
        
        let productos = moduloDatos.productos;
        
        res.render('index', { novedades: productos, masComentados: productos });
    }
};

module.exports = indexController;