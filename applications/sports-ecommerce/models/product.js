const cuid = require("cuid");
const db = require("../db.js");

const itemCategories = [
  "watersports",
  "soccer",
  "basketball",
  "hockey",
  "boardgames",
];

const productSchema = db.Schema({
  _id: { type: String, default: cuid },
  name: String,
  price: Number,
  description: String,
  image: String,
  category: {
    type: String,
    index: true,
    enum: itemCategories,
  },
});

const Product = db.model("Product", productSchema);

async function create(fields) {
  return await new Product(fields).save();
}

module.exports = {
  create,
};
