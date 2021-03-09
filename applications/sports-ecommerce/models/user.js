const cuid = require("cuid");
const { isEmail } = require("validator");
const db = require("../db.js");

const userCategories = ["customer", "admin"];

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

function create(fields) {
  return new User(fields).save();
}

function list() {
  return User.find().exec();
}

function get(conditions) {
  return User.findOne(conditions).exec();
}

module.exports = {
  create,
  list,
  get,
};
