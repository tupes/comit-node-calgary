const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: "HS256", expiresIn: "30d" };

async function authenticateUser(req, res, next) {
  const jwtString = req.cookies.jwt;

  if (!jwtString) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    return next(err);
  }

  const name = await verify(jwtString);

  if (!name) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    return next(err);
  }

  req.username = name;
  next();
}

function sign(name) {
  return jwt.sign({ name }, jwtSecret, jwtOptions);
}

async function verify(jwtString) {
  // use jwt module to verify jwtString
  const { name } = await jwt.verify(jwtString, jwtSecret);
  return name;
}

module.exports = {
  authenticateUser,
  sign,
  verify,
};
