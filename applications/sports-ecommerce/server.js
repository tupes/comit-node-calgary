const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.type("text/plain");
  res.send("This is the about page");
});

app.listen(3000, () => {
  console.log("Express started on port 3000");
});
