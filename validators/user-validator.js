const { check, validationResult } = require("express-validator");

const { STRONG_PASSWORD } = require("../utils/regex");

const registerUserValidationRules = () => {
  return [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("lastname").not().isEmpty().withMessage("Lastname is required"),
    check("username").not().isEmpty().withMessage("Username is required"),
    check("email").not().isEmpty().withMessage("Email is required"),
    check("email").isEmail().withMessage("Email is invalid"),
    check("password").not().isEmpty().withMessage("Password is required"),
    check("password").custom((password) => {
      const regex = new RegExp(STRONG_PASSWORD);
      if (!regex.test(password)) {
        throw new Error(
          "Password must contain an uppercase letter, a number, a special character and should be between 6 and 16 characters"
        );
      }
      return true;
    }),
  ];
};

const editUserValidationRules = () => {
  return [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("lastname").not().isEmpty().withMessage("Lastname is required"),
  ];
};

const loginUserValidationRules = () => {
  return [
    check("email").not().isEmpty().withMessage("Email is required"),
    check("password").not().isEmpty().withMessage("Password is required"),
  ];
};

const deleteUserValidationRules = () => {
  return [
    check("id")
      .not()
      .isEmpty()
      .withMessage("User ID is required to delete user"),
  ];
};

module.exports = {
  registerUserValidationRules,
  deleteUserValidationRules,
  loginUserValidationRules,
  editUserValidationRules,
};
