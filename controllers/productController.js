// const moduloDatos = require("../db/index"); --> esto ya no lo necesito. 
const { validationResult } = require("express-validator");
const db = require("../database/models");

const Product = db.Product;

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

    showProductAdd: function(req,res){
        let usuario= moduloDatos.usuarios[0];
        res.render('product-add',  {usuario:usuario, errores:[]});
    },

    productAdd: function(req,res){
        //let usuario= moduloDatos.usuarios[0]; --> esto se saca. 
        let errors= validationResult(req);

        if (errors.isEmpty()){
            let producto= req.body; 

            Product.create(producto)
                .then(function (response) {
                    res.redirect("/")
                })
                .catch(function (error) {
                    res.send(error)
                })
        }else{
            res.render("product-add", {errores:errors})
        }
    },

};

module.exports = productController;

