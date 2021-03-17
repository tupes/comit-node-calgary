const { getUserWithCart } = require("../services/userService.js");
const cartService = require("../services/cartService.js");

async function renderUserCart(req, res) {
  const user = await getUserWithCart(req.username);
  console.log(user.cart);
  res.render("cart", { products: user.cart });
}

async function addItemToCart(req, res) {
  const updatedUser = await cartService.addItemToCart(
    req.username,
    req.body.itemId
  );
  const cart = updatedUser.cart.map((item) => {
    return { name: item.name, price: item.price };
  });
  res.json({ cart: cart });
}

module.exports = {
  renderUserCart,
  addItemToCart,
};
