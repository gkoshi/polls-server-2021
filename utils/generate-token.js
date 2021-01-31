const jwt = require("jsonwebtoken");

const time = 60 * 60 * 24;
const secret = process.env.APP_SECRET;

const generateToken = (data) => {
  return jwt.sign(data, secret, { expiresIn: time });
};

module.exports = generateToken;
