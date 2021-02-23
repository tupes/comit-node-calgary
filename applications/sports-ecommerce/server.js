const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
app.engine(
  "handlebars",
  expressHandlebars({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", (req, res) => {
  res.send(`Thanks, ${req.body.username}, you have successfully signed-up!`);
});

app.listen(3000, () => {
  console.log("Express started on port 3000");
});
