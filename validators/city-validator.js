const { check, validationResult } = require("express-validator");

const createCityValidationRules = () => {
  return [
    check("country_id").not().isEmpty().withMessage("Country is required"),
    check("name").not().isEmpty().withMessage("Name is required"),
    check("population").not().isEmpty().withMessage("Population is required"),
  ];
};

const editCityValidationRules = () => {
  return [
    check("country_id").not().isEmpty().withMessage("Country is required"),
    check("name").not().isEmpty().withMessage("Name is required"),
    check("population").not().isEmpty().withMessage("Population is required"),
  ];
};

module.exports = {
  createCityValidationRules,
  editCityValidationRules,
};
