const product = require("../Models/productModel");

const createProduct = async (req, res) => {
   try {
      const newProduct = new product(req.body);
      await newProduct.save();
      res.status(200).json({
         message: "product created successfully...",
         product: newProduct,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: "error occured while creating product",
         error: error.message,
      });
   }
};

module.exports = createProduct;
