//const moduloDatos = require("../db/index"); //--> esto ya no lo necesito. 
const db = require("../database/models");
const Product = db.Product;
const { validationResult } = require("express-validator");

const productController = {

    product: function(req,res){
        // let id = req.params.id;

        // let productos = moduloDatos.productos;
        // let productoEncontrado= {};

        // for (let i = 0; i< productos.length; i++){
        //     if (productos[i].id == id){
        //         productoEncontrado = productos[i];
        //     }
        // }

        // res.render('product', { producto : productoEncontrado}); --> ya no necesitamos esto. 

        let id = req.params.id;
        Product.findByPk(id, {
            include: [
            //     {association: "comentarios_producto",
            //         include: [
            //             {association: "comentarios_usuario"}
            //         ]
            // },
            //     {association: "usuario_producto"},
            ]
        })
        .then(function (product) {
            return res.render ("product", {producto: product})
        })
        .catch(function (error) {
            console.log(error);
        })
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

    productEdit: function (req,res) {
        
    },

};

module.exports = productController;

