var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");


const { body } = require("express-validator");

let addValidations= [
    body("nombre").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("descrpicion").notEmpty().withMessage("Debe completar el campo de descripcion"),
    body("precio").notEmpty().isNumeric().withMessage(""),
];

let editValidations= [
    body("nombre").notEmpty().withMessage("Debe completar el campo de nombre"),
    body("descrpicion").notEmpty().withMessage("Debe completar el campo de descripcion"),
    body("precio").notEmpty().isNumeric().withMessage(""),
];

router.get("/add", productController.showProductAdd);
router.post("/add", addValidations, productController.productAdd);

router.get("/:id", productController.product);

router.get("/edit/:id", editValidations, productController.showProductEdit);
router.post("/edit/:id", productController.productEdit);

router.post("/eliminar/:id", productController.productDelete);

// router.get("/buscar", productController.buscador);

module.exports = router;