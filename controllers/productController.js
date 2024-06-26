const db = require("../database/models");
const Product = db.Product;
const User = db.User;
const Comment = db.Comment;
const Op = db.Sequelize.Op;
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
            ],
            order: [['comentarios_producto', 'createdAt', 'DESC']]
        })
        .then(function (product) {
            return res.render ("product", {producto: product})
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    showProductAdd: function(req,res){
        if (!req.session.user){
            return res.redirect("/user/login");
        } else{
            res.render('product-add',  { errores:[]});
        }
    },

    productAdd: function(req,res){
        let errors= validationResult(req);

        if (errors.isEmpty()){
            let producto= req.body; 
            producto.id_usuario= req.session.user.id;

            Product.create(producto)
                .then(function (response) {
                    return res.redirect("/product/" + response.id)
                })
                .catch(function (error) {
                    errors.errors.push(error)
                    return res.render("product-add", { errores: errors.errors })
                })
        }else{
            console.log(errors.errors);
            return res.render("product-add", { errores: errors.errors })
        }
    },

    showProductEdit: function (req,res) {
        if (!req.session.user){
            return res.redirect("/user/login");
        } else{
            let id= req.params.id;

            Product.findByPk(id)
                .then(function (response) {
                    if (response && response.id_usuario == req.session.user.id) {
                        return res.render("product-edit", { id_producto: id, errores: [] })
                    } else {
                        return res.redirect("/product/" + id)
                    }
                })
                .catch(function (error) {
                    return res.send(error)
                })
        }
},

    productEdit: function (req,res) {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            let producto = req.body;
            producto.id_usuario = req.session.user.id;
            
            Product.update(producto, {
                where: {
                    id: req.params.id
                }
            })
                .then(function (response) {
                    return res.redirect("/product/" + req.params.id)
                })
                .catch(function (error) {
                    errors.errors.push(error)
                    return res.render("product-edit", { id_producto: req.params.id, errores: errors.errors })
                })
        } else {
            res.render("product-edit", { id_producto: req.params.id, errores: errors.errors })
        }
    },
    
   productDelete: function (req, res) {
        let errors = validationResult(req);
        
        if (errors.isEmpty()){
            let id = req.params.id;
            
            Product.destroy({
                where: {
                    id: id
                },
                parent: Comment.destroy({ 
                    where: {
                        id_producto: id
                    }
                })
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
        let busqueda= req.query.search;

        Product.findAll({
            where: {
                [Op.or]: [
                    {
                        nombre: { [Op.like]: "%" + busqueda + "%"}
                    },
                    {
                        descripcion: { [Op.like]: "%" + busqueda + "%"}
                    },
                ]
            },
            include:  [
                {association: "comentarios_producto",
                    include: [
                        {association: "usuario_comentario"}
                    ]
            },
                {association: "usuario_producto"},
            ],
            order: [['createdAt', 'DESC']]
        })
        .then(function(response){
            res.render('search-results', {productos: response});
        })
        .catch(function(error){
            //console.log(error);
            return res.send(error);
        })
    },

    comentarioAdd: function (req,res) {
        let errors = validationResult(req);

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
            if (errors.isEmpty()){
                Comment.create({
                    texto_comentario: req.body.comentario,
                    id_usuario: req.session.user.id,
                    id_producto: req.params.id
                })
                    .then(function (response) {
                        res.redirect("/product/"+ req.params.id)
                    })
                    .catch(function (error) {
                        res.render("product", { producto: product, errors : error })
                    })
            } else {
                console.log(errors)
                res.render("product", { producto: product, errors : errors.errors })
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    }

};

module.exports = productController;

