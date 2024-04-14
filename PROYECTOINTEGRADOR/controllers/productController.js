const moduloDatos = require("../db/index");

const productController = {

    product: function(req,res){
        let id = req.params.id;

        let productos = modulDatos.productos;
        let productoEncontrado= {};

        for (let i = 0; i< productos.length; i++){
            if (productos[i].id == id){
                productoEncontrado = productos[i];
            }
        }

        res.render('product', { producto : productoEncontrado})
    },

    productAdd: function(req,res){
        res.render('productAdd')
    },

};

module.exports = productController;

