const { listProducts } = require("../services/productService.js");
const productCategories = require("../data/productCategories.js");

async function renderProductsList(req, res, next) {
  try {
    const items = await listProducts();

    const itemsToDisplay = req.query.category
      ? items.filter((item) => item.category === req.query.category)
      : items;

    console.log(`Username: ${req.username}`);
    res.render("home", {
      layout: req.layout,
      items: itemsToDisplay,
      productCategories,
    });
  } catch (error) {
    next(error);
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await listProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  renderProductsList,
  getProducts,
};
