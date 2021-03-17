const { createUser, loginUser } = require("../services/userService.js");

function renderSignupForm(req, res) {
  res.render("signup", {
    layout: "alternative",
  });
}

async function processSignupSubmission(req, res) {
  const token = await createUser({ ...req.body, category: "customer" });
  if (token) {
    res.cookie("jwt", token, { httpOnly: true });
    message = "Thank you for creating an account!";
  } else {
    message = "An error has occurred. Please try again.";
  }
  res.render("signup", {
    layout: "alternative",
    message,
  });
}

function renderLoginForm(req, res) {
  res.render("login", {
    layout: "alternative",
  });
}

async function processLoginSubmission(req, res) {
  const token = await loginUser(req.body.name, req.body.password);
  if (token) {
    res.cookie("jwt", token, { httpOnly: true });
    message = "You have successfully logged in";
  } else {
    message = "Invalid name or password";
  }
  res.render("login", {
    layout: "alternative",
    message,
  });
}

module.exports = {
  renderSignupForm,
  processSignupSubmission,
  renderLoginForm,
  processLoginSubmission,
};
