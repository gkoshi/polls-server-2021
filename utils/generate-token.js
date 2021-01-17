const jwt = require("jsonwebtoken");

const time = "1h";
const secret = process.env.APP_SECRET;

const generateToken = (data) => {
  return jwt.sign(data, secret, { expiresIn: time });
};

module.exports = generateToken;
