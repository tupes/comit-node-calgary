const { listProducts } = require("../services/productService.js");
const productCategories = require("../data/productCategories.js");

async function renderProductsList(req, res, next) {
  try {
    const items = await listProducts();

    const itemsToDisplay = req.query.category
      ? items.filter((item) => item.category === req.query.category)
      : items;

    res.render("home", { items: itemsToDisplay, productCategories });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  renderProductsList,
};
