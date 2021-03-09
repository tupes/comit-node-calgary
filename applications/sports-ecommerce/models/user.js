const cuid = require("cuid");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const db = require("../db.js");

const userCategories = ["customer", "admin"];
const SALT_ROUNDS = 10;

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

function list() {
  return User.find().lean();
}

async function get(name, password) {
  foundUser = await User.findOne({ name }).exec();
  if (foundUser.password === password) {
    return foundUser;
  }
  return null;
}

module.exports = {
  create,
  list,
  get,
};
