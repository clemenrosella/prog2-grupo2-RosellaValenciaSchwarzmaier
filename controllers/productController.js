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

    showProductAdd: function(req,res){
        let usuario= moduloDatos.usuarios[0];
        res.render('product-add',  {usuario:usuario, errores:[]});
    },

    productAdd: function(req,res){
        let usuario= moduloDatos.usuarios[0];
        let errors= [];


        let nombre_producto= req.body.nombre;
        let descripcion_producto = req.body.descripcion;
        let imagen_producto = req.body.imagen; 


        if (nombre_producto === ""){
            errors.push ("el campo nombre debe estar completo");
        }else if(descripcion_producto.length <5){
            errors.push ("el campo nombre debe tener al menos 5 caracteres");
        }

        if ( descripcion_producto=== ""){
            errors.push ("el campo descripción debe estar completo");
        }else if(descripcion_producto.length <5){
            errors.push ("el campo descripción debe tener al menos 5 caracteres");
        }

        if (imagen_producto === ""){
            errors.push ("el campo imagen debe estar completo");
        }else if(descripcion_producto.length <5){
            errors.push ("el campo imagen debe tener al menos 5 caracteres");
        }

        if (errors.length > 0){
            res.render ("product-add", {usuario:usuario, errores:errors});
        }else{
            Product.findOne({ 
                where: { nombre: nombre_producto }
            })
            .then(function(response) {
                if (!response) { //Si no se encuentra un producto con el mismo nombre, se crea un nuevo producto con los datos proporcionados
                    return Product.create({
                        imagen: imagen_producto,
                        nombre: nombre_producto,
                        descripcion: descripcion_producto,
                        id_usuario: 0
                    });
                } else {
                    errors.push("Ya existe un producto con el mismo nombre");
                    res.render("product-add", { usuario: usuario, errores: errors });
                }
            })
            .then(function(product) {
                if (product) {
                    res.redirect("/");
                }
            })
            .catch(function(error) {
                errors.push("Error de base de datos"); 
                errors.push(error.message);
                res.render("product-add", { usuario: usuario, errores: errors });
            });
        }
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

