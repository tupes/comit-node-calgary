require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const auth = require("./services/auth.js");
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
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.connection.timeout);
  next();
});

// routing
app.get("/", async (req, res) => {
  const items = await product.list();
  const itemCategories = product.itemCategories;

  const itemsToDisplay = req.query.category
    ? items.filter((item) => item.category === req.query.category)
    : items;

  res.render("home", { items: itemsToDisplay, itemCategories });
});

app.get("/about", (req, res) => {
  res.send("Our company has been providing great service for over 20 years!");
});

app.get("/cart", auth.authenticateUser, async (req, res) => {
  const foundUser = await user.get(req.username);
  res.send(`User Cart for ${foundUser.email}`);
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", async (req, res) => {
  await user.create({ ...req.body, category: "customer" });
  res.redirect("/");
});

app.get("/login", (req, res) => {
  console.log("Received GET for login");
  res.render("login");
});
app.post("/login", async (req, res) => {
  console.log("Received POST for login");
  const token = await user.login(req.body.name, req.body.password);
  console.log(token);
  res.cookie("jwt", token, { httpOnly: true });
  res.render("login", { message: "You have successfully logged in" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
