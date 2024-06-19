var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");


const { body } = require("express-validator");

let addValidations= [
    body("nombre").notEmpty().withMessage(""),
    body("descrpicion").notEmpty().withMessage(""),
    body("precio").notEmpty().isNumeric().withMessage(""),
];

router.get("/add", productController.showProductAdd);
router.post("/add", addValidations, productController.productAdd);

router.get("/:id", productController.product);

router.get("/edit/:id", productController.productEdit);

router.post("/eliminar/:id", productController.productDelete);


module.exports = router;