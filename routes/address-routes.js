const express = require("express");
const router = express.Router();

const { ADDRESS_ROUTE_PATHS } = require("./route-enums");
const {
  createAddress,
  editAddress,
  deleteAddress,
  getAddressById,
  getAllAddresses,
} = require("../controllers/address-controller");

const { validate } = require("../validators/validate");

router.post(ADDRESS_ROUTE_PATHS.CREATE_ADDRESS, validate, createAddress);

router.put(ADDRESS_ROUTE_PATHS.EDIT_ADDRESS, validate, editAddress);

router.delete(ADDRESS_ROUTE_PATHS.DELETE_ADDRESS, deleteAddress);

router.get(ADDRESS_ROUTE_PATHS.GET_ADDRESS_BY_ID, getAddressById);

router.get(ADDRESS_ROUTE_PATHS.GET_ALL_ADDRESSES, getAllAddresses);

module.exports = router;
