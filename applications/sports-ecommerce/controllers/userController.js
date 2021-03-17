const { createUser, loginUser } = require("../services/userService.js");

function renderSignupForm(req, res) {
  res.render("signup");
}

async function processSignupSubmission(req, res) {
  await createUser({ ...req.body, category: "customer" });
  res.redirect("/");
}

function renderLoginForm(req, res) {
  res.render("login", {
    layout: "alternative",
  });
}

async function processLoginSubmission(req, res) {
  const token = await loginUser(req.body.name, req.body.password);
  res.cookie("jwt", token, { httpOnly: true });
  res.render("login", {
    layout: "alternative",
    message: "You have successfully logged in",
  });
}

module.exports = {
  renderSignupForm,
  processSignupSubmission,
  renderLoginForm,
  processLoginSubmission,
};
