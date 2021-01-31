const express = require("express");
const router = express.Router();

const { ADMIN_ROUTES_PATHS } = require("./route-enums");
const {
  registerAdmin,
  loginAdmin,
  editAdmin,
  deleteAdmin,
  getAdminById,
  getAllAdmins,
} = require("../controllers/admin-controller");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.post(ADMIN_ROUTES_PATHS.LOGIN, validate, loginAdmin);

router.use(checkAuth);

router.post(ADMIN_ROUTES_PATHS.REGISTER_ADMIN, validate, registerAdmin);

router.put(ADMIN_ROUTES_PATHS.EDIT_ADMIN, validate, editAdmin);

router.delete(ADMIN_ROUTES_PATHS.DELETE_ADMIN, validate, deleteAdmin);

router.get(ADMIN_ROUTES_PATHS.GET_ADMIN_BY_ID, getAdminById);

router.get(ADMIN_ROUTES_PATHS.GET_ALL_ADMINS, getAllAdmins);

module.exports = router;
