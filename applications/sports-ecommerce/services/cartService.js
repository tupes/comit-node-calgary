const User = require("../models/user.js");

async function addItemToCart(name, itemId) {
  let user = await User.findOne({ name }).exec();
  console.log(user);
  user.cart.push(itemId);
  await user.save();
  return await User.findOne({ name }).populate("cart").exec();
}

module.exports = {
  addItemToCart,
};
