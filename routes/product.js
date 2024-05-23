var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");

router.get("/add", productController.productAdd);

router.get("/:id", productController.product);

router.get("/edit/:id", productController.productEdit);


module.exports = router;