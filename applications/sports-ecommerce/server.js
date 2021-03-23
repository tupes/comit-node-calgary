require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");

const {
  authenticateUser,
  validateAuthentication,
} = require("./middleware/authMiddleware.js");
const { renderProductsList } = require("./controllers/productController.js");
const {
  renderSignupForm,
  processSignupSubmission,
  renderLoginForm,
  processLoginSubmission,
  renderLogout,
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
app.use(authenticateUser);

// routing
app.get("/", renderProductsList);
app.get("/logout", renderLogout);

app.get("/signup", renderSignupForm);
app.post("/signup", processSignupSubmission);

app.get("/login", renderLoginForm);
app.post("/login", processLoginSubmission);

app.get("/cart", validateAuthentication, renderUserCart);
app.post("/cart", validateAuthentication, addItemToCart);

// error handling middleware
app.use((req, res, next) => {
  res.status(404).render("error", { message: "Page not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).render("error", { message: err.message });
});

// start the server
app.listen(3000, () => {
  console.log("Express started on port 3000");
});
