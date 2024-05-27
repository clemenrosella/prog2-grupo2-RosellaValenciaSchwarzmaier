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

    productEdit: function (req, res) {
        let id = req.params.id;
        let productos = moduloDatos.productos;
        let usuario= moduloDatos.usuarios;
        let producto = null;
        
        for (let i = 0; i < productos.length; i++) {
            if (id == productos[i].id) {
                producto = productos[i];
            };
        };
        res.render('product-edit', { usuario: usuario, producto: producto })
    },

};

module.exports = productController;

