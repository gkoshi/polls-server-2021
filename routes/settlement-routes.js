const express = require("express");
const router = express.Router();

const {
  createSettlement,
  editSettlement,
  deleteSettlement,
  getSettlementById,
  getAllSettlements,
  getSettlementByCityId,
} = require("../controllers/settlement-controller");

const { SETTLEMENT_ROUTE_PATHS } = require("./route-enums");

const checkAuth = require("../middlewares/check-auth");

router.use(checkAuth);

router.post(SETTLEMENT_ROUTE_PATHS.CREATE_SETTLEMENT, createSettlement);

router.put(SETTLEMENT_ROUTE_PATHS.EDIT_SETTLEMENT, editSettlement);

router.delete(SETTLEMENT_ROUTE_PATHS.DELETE_SETTLEMENT, deleteSettlement);

router.get(SETTLEMENT_ROUTE_PATHS.GET_SETTLEMENT_BY_ID, getSettlementById);

router.get(SETTLEMENT_ROUTE_PATHS.GET_SETTLEMENT_BY_COUNTRY_AND_CITY_ID, getSettlementByCityId);

router.get(SETTLEMENT_ROUTE_PATHS.GET_ALL_SETTLEMENTS, getAllSettlements);

module.exports = router;
