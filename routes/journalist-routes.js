const express = require("express");
const router = express.Router();

const { JOURNALIST_ROUTES_PATHS } = require("./route-enums");
const {
  registerJournalist,
  loginJournalist,
  editJournalist,
  deleteJournalist,
  getJournalistById,
  getAllJournalists,
} = require("../controllers/journalist-controller");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.post(JOURNALIST_ROUTES_PATHS.LOGIN, validate, loginJournalist);

router.use(checkAuth);

router.post(
  JOURNALIST_ROUTES_PATHS.REGISTER_JOURNALIST,
  validate,
  registerJournalist
);


router.put(JOURNALIST_ROUTES_PATHS.EDIT_JOURNALIST, validate, editJournalist);

router.delete(
  JOURNALIST_ROUTES_PATHS.DELETE_JOURNALIST,
  validate,
  deleteJournalist
);

router.get(JOURNALIST_ROUTES_PATHS.GET_JOURNALIST_BY_ID, getJournalistById);

router.get(JOURNALIST_ROUTES_PATHS.GET_ALL_JOURNALISTS, getAllJournalists);

module.exports = router;
