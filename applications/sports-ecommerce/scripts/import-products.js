const db = require("../db.js");
const { create } = require("../models/product.js");

const products = require("../products.json");

(async function () {
  for (product of products) {
    await create(product);
  }

  db.disconnect();
})();
