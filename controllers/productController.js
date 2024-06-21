const db = require("../database/models");
const Product = db.Product;
const User = db.User;
const { validationResult } = require("express-validator");

const productController = {

    product: function(req,res){
        let id = req.params.id;
        
        Product.findByPk(id, {
            include: [
                {association: "comentarios_producto",
                    include: [
                        {association: "usuario_comentario"}
                    ]
            },
                {association: "usuario_producto"},
            ]
        })
        .then(function (product) {
            // return res.send(product)
            return res.render ("product", {producto: product})
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    showProductAdd: function(req,res){
        // let usuario= moduloDatos.usuarios[0];
        
        if (!req.session.user){
            return res.redirect("/user/login");
        } else{
            User.findByPk(req.session.user.id)
                .then(function (response) {
                    res.render('product-add',  {usuario: response, errores:[]});
                })
                .catch(function (error) {
                    res.send(error)
                })
        }

    },

    productAdd: function(req,res){
        //let usuario= moduloDatos.usuarios[0]; --> esto se saca. 
        let errors= validationResult(req);

        if (errors.isEmpty()){
            let producto= req.body; 
            producto.id_usuario= req.session.user.id;

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

    showProductEdit: function (req,res) {
       
        if (!req.session.user){
            return res.redirect("/user/login");
        } else{
            let id= req.params.id;

        Product.findByPk(id)
        .then(function(response){
            if (response !== null){
                res.render("product-edit", {producto: response})
            } else{
                res.send("No se encontró el producto")
            }
        })
        .catch(function(error){
            res.send(error)
        })
        }
        
    },

    productEdit: function (req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let producto = req.body;
            producto.id_usuario = req.session.user.id;
            
            Product.update(producto)
            .then(function (response) {
                res.redirect("/")
            })
            .catch(function (error) {
                res.send(error)
            })
        }else{
            res.render("product-edit", {errores:errors})
        }
    },
    
   productDelete: function (req, res) {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let id = req.params.id;
            
            Product.destroy({
                where:{
                    id: id
                }
            })
            .then(function (response) {
                return res.redirect("/")
            })
            .catch(function (error) {
                res.send(error)
            })
        }else{
            res.render("product", {errores:errors})
        }
   },

   buscador: function (req,res) {
        let bsuqueda= req.params.search;
        
   }

};

module.exports = productController;

