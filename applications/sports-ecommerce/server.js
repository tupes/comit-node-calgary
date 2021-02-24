const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const data = require("./data.json");

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
app.get("/", (req, res) => {
  res.render("home", { items: data.items, username: "<i>Mark</i>" });
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
