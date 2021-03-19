require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");

const { authenticateUser } = require("./middleware/authMiddleware.js");
const { renderProductsList } = require("./controllers/productController.js");
const {
  renderSignupForm,
  processSignupSubmission,
  renderLoginForm,
  processLoginSubmission,
} = require("./controllers/userController.js");
const {
  renderUserCart,
  addItemToCart,
} = require("./controllers/cartController.js");

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// routing
app.get("/", renderProductsList);

app.get("/signup", renderSignupForm);
app.post("/signup", processSignupSubmission);

app.get("/login", renderLoginForm);
app.post("/login", processLoginSubmission);

app.get("/cart", authenticateUser, renderUserCart);
app.post("/cart", authenticateUser, addItemToCart);

// error handling middleware
app.use((req, res, next) => {
  console.log(err);
  res.status(404).render("error", { error: err });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("error", { error: err });
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
