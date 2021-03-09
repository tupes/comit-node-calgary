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
  imageUrl: String,
  category: {
    type: String,
    index: true,
    enum: itemCategories,
  },
});

const Product = db.model("Product", productSchema);

function create(fields) {
  return new Product(fields).save();
}

function list() {
  return Product.find().setOptions({ lean: true }).exec();
}

module.exports = {
  itemCategories,
  create,
  list,
};
