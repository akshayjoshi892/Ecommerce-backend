const router = require("express").Router();
const createProduct = require("../Controllers/productController");
const verifyAdmin = require("../Middleware/verifyToken");

router.post("/", verifyAdmin, createProduct);

module.exports = router;
