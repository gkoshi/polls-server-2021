const express = require("express");
const router = express.Router();

const { CITY_ROUTE_PATHS } = require("./route-enums");
const {
  createCity,
  editCity,
  deleteCity,
  getCityById,
  getAllCities,
  getCityByCountryId
} = require("../controllers/city-controller");

const {
  createCityValidationRules,
  editCityValidationRules,
} = require("../validators/city-validator");

const { validate } = require("../validators/validate");

router.post(
  CITY_ROUTE_PATHS.CREATE_CITY,
  createCityValidationRules(),
  validate,
  createCity
);

router.put(
  CITY_ROUTE_PATHS.EDIT_CITY,
  editCityValidationRules(),
  validate,
  editCity
);

router.delete(CITY_ROUTE_PATHS.DELETE_CITY, deleteCity);

router.get(CITY_ROUTE_PATHS.GET_CITY_BY_ID, getCityById);

router.get(CITY_ROUTE_PATHS.GET_CITIES_BY_COUNTRY_ID, getCityByCountryId);

router.get(CITY_ROUTE_PATHS.GET_ALL_CITIES, getAllCities);

module.exports = router;
