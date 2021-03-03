const mongoose = require("mongoose");
const Product = require("./models/product.js");
const ProductCategory = require("./models/productCategory.js");
const credentials = require("./credentials.develop.json");
const { connectionString } = credentials.mongo;

mongoose.connect(connectionString);
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connection established");
});

module.exports = {
  getItems: async () => {
    const products = await Product.find().lean();
    console.log(products);
    return products;
  },

  getItemCategories: async () => {
    const categories = await ProductCategory.find({}).lean();
    console.log(categories);
    return categories;
  },
};
