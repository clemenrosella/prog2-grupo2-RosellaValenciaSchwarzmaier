var express= require ('express');
var router = express.Router();

const productController= require("../controllers/productController");

router.get("/add", productController.productAdd);

router.get("/:id", productController.productAdd);


module.exports = router;