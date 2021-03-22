const { getUserWithCart } = require("../services/userService.js");
const cartService = require("../services/cartService.js");

async function renderUserCart(req, res, next) {
  try {
    const user = await getUserWithCart(req.username);
    console.log(user.cart);
    res.render("cart", { products: user.cart });
  } catch (error) {
    next(error);
  }
}

async function addItemToCart(req, res, next) {
  try {
    const updatedUser = await cartService.addItemToCart(
      req.username,
      req.body.itemId
    );
    const cart = updatedUser.cart.map((item) => {
      return { name: item.name, price: item.price };
    });
    res.json({ cart: cart });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  renderUserCart,
  addItemToCart,
};
