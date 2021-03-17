const User = require("../models/user.js");
const { getUser, getUserWithCart } = require("./userService.js");

async function addItemToCart(name, itemId) {
  let user = await getUser(name);
  console.log(user);
  user.cart.push(itemId);
  await user.save();
  return getUserWithCart(name);
}

module.exports = {
  addItemToCart,
};
