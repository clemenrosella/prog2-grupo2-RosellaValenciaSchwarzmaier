var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");


const { body } = require("express-validator");

router.get("/add", productController.showProductAdd);
router.post("/add", productController.productAdd);

router.get("/:id", productController.product);

router.get("/edit/:id", productController.productEdit);


module.exports = router;