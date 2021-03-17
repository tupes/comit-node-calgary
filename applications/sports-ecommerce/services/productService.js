const Product = require("../models/product.js");

function createProduct(fields) {
  return new Product(fields).save();
}

function listProducts() {
  return Product.find().setOptions({ lean: true }).exec();
}

module.exports = {
  createProduct,
  listProducts,
};
