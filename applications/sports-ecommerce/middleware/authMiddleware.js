const { verify } = require("../utils/auth.js");

async function validateAuthentication(req, res, next) {
  if (!req.username) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    return next(err);
  }

  next();
}

async function authenticateUser(req, res, next) {
  const jwtString = req.cookies.jwt;

  if (!jwtString) {
    req.layout = "main";
    return next();
  }

  const name = await verify(jwtString);

  if (!name) {
    req.layout = "main";
    return next();
  }

  req.username = name;
  req.layout = "logged-in";
  next();
}

module.exports = {
  validateAuthentication,
  authenticateUser,
};
