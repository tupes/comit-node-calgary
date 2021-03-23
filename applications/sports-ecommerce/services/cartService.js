const User = require("../models/user.js");
const { getUser, getUserWithCart } = require("./userService.js");

async function getCart(username) {
  const user = await getUserWithCart(username);

  const products = {};
  user.cart.forEach((product) => {
    const productId = product._id;
    if (!products[productId]) {
      products[productId] = { ...product, quantity: 1 };
    } else {
      products[productId].quantity += 1;
    }
  });
  console.log(products);

  return products;
}

async function addItemToCart(name, itemId) {
  let user = await getUser(name);
  console.log(user);
  user.cart.push(itemId);
  await user.save();
  return getUserWithCart(name);
}

module.exports = {
  getCart,
  addItemToCart,
};
