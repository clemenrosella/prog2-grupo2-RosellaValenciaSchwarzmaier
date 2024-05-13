const moduloDatos = require("../db/index");

const productController = {

    product: function(req,res){
        let id = req.params.id;

        let productos = moduloDatos.productos;
        let productoEncontrado= {};

        for (let i = 0; i< productos.length; i++){
            if (productos[i].id == id){
                productoEncontrado = productos[i];
            }
        }

        res.render('product', { producto : productoEncontrado});
    },

    productAdd: function(req,res){
        let usuario= moduloDatos.usuarios[0];
        res.render('product-add',  {usuario:usuario});
    },

};

module.exports = productController;

