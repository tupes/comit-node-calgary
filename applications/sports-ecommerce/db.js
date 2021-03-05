const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.connectionString);
const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connection established");
});

module.exports = mongoose;
