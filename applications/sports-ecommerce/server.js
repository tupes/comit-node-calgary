const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const { getItems, getItemCategories } = require("./db.js");

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
  const items = await getItems();
  const itemCategories = await getItemCategories();

  const itemsToDisplay = req.query.category
    ? items.filter((item) => item.category === req.query.category)
    : items;

  res.render("home", { items: itemsToDisplay, itemCategories });
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/submit", (req, res) => {
  res.send(`Thanks, ${req.body.username}, for signing up!`);
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
