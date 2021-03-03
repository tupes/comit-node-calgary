const mongoose = require("mongoose");

const productCategorySchema = mongoose.Schema({
  name: String,
});

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);
module.exports = ProductCategory;
