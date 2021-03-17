const db = require("../db.js");
const { createProduct } = require("../services/productService.js");

const products = require("../products.json");

(async function () {
  for (product of products) {
    await createProduct(product);
  }

  db.disconnect();
})();
