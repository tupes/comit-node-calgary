const { getUser } = require("../services/userService.js");
const cartService = require("../services/cartService.js");

async function renderUserCart(req, res) {
  const foundUser = await getUser(req.username);
  res.send(`User Cart for ${foundUser.email}`);
}

async function addItemToCart(req, res) {
  console.log(req.body.itemId);
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
