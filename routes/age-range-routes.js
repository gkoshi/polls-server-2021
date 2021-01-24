const express = require("express");
const router = express.Router();

const { AGE_RANGE_ROUTE_PATHS } = require("./route-enums");
const {
  createAgeRange,
  editAgeRange,
  deleteAgeRange,
  getAgeRangeById,
  getAllAgeRanges,
} = require("../controllers/age-range-controller");

const { validate } = require("../validators/validate");

router.post(AGE_RANGE_ROUTE_PATHS.CREATE_AGE_RANGE, validate, createAgeRange);

router.put(AGE_RANGE_ROUTE_PATHS.EDIT_AGE_RANGE, validate, editAgeRange);

router.delete(AGE_RANGE_ROUTE_PATHS.DELETE_AGE_RANGE, deleteAgeRange);

router.get(AGE_RANGE_ROUTE_PATHS.GET_AGE_RANGE_BY_ID, getAgeRangeById);

router.get(AGE_RANGE_ROUTE_PATHS.GET_ALL_AGE_RANGES, getAllAgeRanges);

module.exports = router;
