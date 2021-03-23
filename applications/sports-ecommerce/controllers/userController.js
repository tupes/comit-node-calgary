const { createUser, loginUser } = require("../services/userService.js");

function renderSignupForm(req, res) {
  res.render("signup", {
    layout: "alternative",
  });
}

async function processSignupSubmission(req, res, next) {
  let token;
  try {
    token = await createUser({ ...req.body, category: "customer" });
  } catch (error) {
    next(error);
  }

  if (token === "DUPLICATE_USERNAME") {
    message = "Username already taken";
  } else if (token) {
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

async function processLoginSubmission(req, res, next) {
  let token;
  try {
    token = await loginUser(req.body.name, req.body.password);
  } catch (error) {
    next(error);
  }

  if (token) {
    res.cookie("jwt", token, { httpOnly: true });
    message = "You have successfully logged in";
    res.redirect("/");
  } else {
    message = "Invalid name or password";
    res.render("login", {
      layout: "alternative",
      message,
    });
  }
}

function renderLogout(req, res) {
  res.clearCookie("jwt");
  res.render("logout");
}

module.exports = {
  renderSignupForm,
  processSignupSubmission,
  renderLoginForm,
  processLoginSubmission,
  renderLogout,
};
