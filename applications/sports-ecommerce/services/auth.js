const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: "HS256", expiresIn: "30d" };

async function authenticateUser(req, res, next) {
  const jwtString = req.cookies.jwt;
  const { name } = await verify(jwtString);

  if (name) {
    return next();
  }

  const err = new Error("Unauthorized");
  err.statusCode = 401;
  next(err);
}

function sign(name) {
  return jwt.sign({ name }, jwtSecret, jwtOptions);
}

async function verify(jwtString) {
  // use jwt module to verify jwtString
  return jwt.verify(jwtString.replace(/^Bearer /i, ""), jwtSecret);
}

module.exports = {
  authenticateUser,
  sign,
  verify,
};
