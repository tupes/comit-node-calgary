const cuid = require("cuid");
const { isEmail } = require("validator");
const db = require("../db.js");

const userCategories = ["customer", "admin"];

const userSchema = db.Schema({
  _id: { type: String, default: cuid },
  name: { type: String, required: true, unique: true },
  email: { type: String, validate: { validator: isEmail } },
  password: { type: String, required: true },
  category: {
    type: String,
    enum: userCategories,
  },
  cart: [{ type: String, ref: "Product" }],
});

const User = db.model("User", userSchema);

module.exports = User;
