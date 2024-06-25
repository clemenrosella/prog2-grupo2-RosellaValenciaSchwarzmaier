var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");


const { body } = require("express-validator");

let addValidations= [
    body("nombre").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("descripcion").notEmpty().withMessage("Debe completar el campo de descripcion"),
    body("imagen").notEmpty().withMessage("Debes cargar una imagen de tu producto"),
];

let editValidations= [
    body("nombre").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("descripcion").notEmpty().withMessage("Debe completar el campo de descripcion"),
    body("imagen").notEmpty().isNumeric().withMessage(""),
];

let comentarioValidations= [
    body("comentario")
        .notEmpty().withMessage("Debe completar el campo de comentario").bail()
        .isLength({min: 3}).withMessage("El comentario debe tener al menos 3 caracteres"),
];

router.get("/add", productController.showProductAdd);
router.post("/add", addValidations, productController.productAdd);

router.get("/buscar", productController.buscador);

router.get("/:id", productController.product);

router.post("/agregar-comentario/:id", comentarioValidations, productController.comentarioAdd);

router.get("/edit/:id", editValidations, productController.showProductEdit);
router.post("/edit/:id", productController.productEdit);

router.post("/eliminar/:id", productController.productDelete);


module.exports = router;