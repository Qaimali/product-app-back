const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require("../controllers/product.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", product_controller.test);
router.get("/get_product/:id", product_controller.product_details);
router.post("/add_product", product_controller.product_create);
router.get("/get_all", product_controller.getAllProducts);
router.delete("/delete_orders", product_controller.deleteProducts);
module.exports = router;
