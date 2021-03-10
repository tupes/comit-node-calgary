require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const product = require("./models/product.js");
const user = require("./models/user.js");

const app = express();

// configure express to use handlebars
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

// middleware
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// routing
app.get("/", async (req, res) => {
  const items = await product.list();
  const itemCategories = product.itemCategories;

  const itemsToDisplay = req.query.category
    ? items.filter((item) => item.category === req.query.category)
    : items;

  res.render("home", { items: itemsToDisplay, itemCategories });
});
app.get("/cart", (req, res) => {
  const jwtString = req.cookies.jwt;
  const isVerified = auth.verify(jwtString);
  if (isVerified) {
    res.send("User Cart");
  }
  res.status(403).send("Unable to access cart");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", async (req, res) => {
  await user.create({ ...req.body, category: "customer" });
  res.redirect("/");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  const token = await user.login(req.body.name, req.body.password);
  console.log(token);
  res.cookie("jwt", token, { httpOnly: true });
  res.redirect(303, "/");
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
