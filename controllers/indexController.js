//const moduloDatos = require('../db/index');
const db = require("../database/models");
const User = db.User;
const Product = db.Product;

const indexController = {
    home: function (req, res) {
        
        //let productos = moduloDatos.productos;

        Product.findAll({
            include: [
                {association: 'usuario_producto'},
                {association: 'comentarios_producto'}
            ],
            order: [['updatedAt', 'DESC']]
        })
        .then(function(productos){
            res.render('index', {novedades: productos, masComentados: productos});
        })
        .catch(function(error){
            res.send(error)
        })
    }
};
module.exports = indexController;