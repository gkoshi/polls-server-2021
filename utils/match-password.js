const bcrypt = require("bcrypt");

const matchPassword = async (plainPassword, dbPassword) => {
  return bcrypt.compare(plainPassword, dbPassword);
};

module.exports = matchPassword;
