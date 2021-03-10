const cuid = require("cuid");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db.js");

const userCategories = ["customer", "admin"];
const SALT_ROUNDS = 10;
const jwtSecret = process.env.JWT_SECRET;
const jwtOpts = { algorithm: "HS256", expiresIn: "30d" };

const userSchema = db.Schema({
  _id: { type: String, default: cuid },
  name: { type: String, required: true },
  email: { type: String, validate: { validator: isEmail } },
  password: { type: String, required: true },
  category: {
    type: String,
    enum: userCategories,
  },
});

const User = db.model("User", userSchema);

async function create(fields) {
  return new User({
    ...fields,
    password: await bcrypt.hash(fields.password, SALT_ROUNDS),
  }).save();
}

async function login(name, password) {
  foundUser = await User.findOne({ name }).exec();
  if (await bcrypt.compare(password, foundUser.password)) {
    return await jwt.sign({ name: foundUser.name }, jwtSecret, jwtOpts);
  }
  return null;
}

module.exports = {
  create,
  login,
};
