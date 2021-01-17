const express = require('express');
const router = express.Router();

const { USER_ROUTES_PATHS } = require('./route-enums');
const {
  registerUser,
  loginUser,
  editUser,
  deleteUser,
  getUserById,
  getAllUsers,
} = require('../controllers/user-controller');

const {
  registerUserValidationRules,
  deleteUserValidationRules,
  loginUserValidationRules,
  editUserValidationRules,
} = require('../validators/user-validator');

const { validate } = require('../validators/validate');

router.post(
  USER_ROUTES_PATHS.REGISTER_USER,
  registerUserValidationRules(),
  validate,
  registerUser
);

router.post(
  USER_ROUTES_PATHS.LOGIN,
  loginUserValidationRules(),
  validate,
  loginUser
);

router.put(
  USER_ROUTES_PATHS.EDIT_USER,
  editUserValidationRules(),
  validate,
  editUser
);

router.delete(
  USER_ROUTES_PATHS.DELETE_USER,
  deleteUserValidationRules(),
  validate,
  deleteUser
);

router.get(USER_ROUTES_PATHS.GET_USER_BY_ID, getUserById);

router.get(USER_ROUTES_PATHS.GET_ALL_USERS, getAllUsers);

module.exports = router;
