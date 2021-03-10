const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
const jwtOptions = { algorithm: "HS256", expiresIn: "30d" };

function sign(name) {
  return jwt.sign({ name }, jwtSecret, jwtOptions);
}

function verify(jwtString) {
  // use jwt module to verify jwtString
}

module.exports = {
  sign,
  verify,
};
