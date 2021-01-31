const express = require("express");
const router = express.Router();

const { COUNTRY_ROUTE_PATHS } = require("./route-enums");
const {
  createCountry,
  editCountry,
  deleteCountry,
  getCountryById,
  getAllCountries,
} = require("../controllers/country-controller");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.use(checkAuth);

router.post(COUNTRY_ROUTE_PATHS.CREATE_COUNTRY, validate, createCountry);

router.put(COUNTRY_ROUTE_PATHS.EDIT_COUNTRY, validate, editCountry);

router.delete(COUNTRY_ROUTE_PATHS.DELETE_COUNTRY, deleteCountry);

router.get(COUNTRY_ROUTE_PATHS.GET_COUNTRY_BY_ID, getCountryById);

router.get(COUNTRY_ROUTE_PATHS.GET_ALL_COUNTRIES, getAllCountries);

module.exports = router;
