const cuid = require("cuid");
const db = require("../db.js");

const productSchema = db.Schema({
  _id: { type: String, default: cuid },
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
});

const Product = db.model("Product", productSchema);

async function create(fields) {
  return await new Product(fields).save();
}

module.exports = {
  create,
};
