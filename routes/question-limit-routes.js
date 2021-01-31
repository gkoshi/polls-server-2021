const express = require("express");
const router = express.Router();

const { QUESTION_LIMIT_ROUTE_PATHS } = require("./route-enums");
const {
  createQuestionLimit,
  editQuestionLimit,
  deleteQuestionLimit,
  getQuestionLimitById,
} = require("../controllers/question-limit-controller");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.use(checkAuth);

router.post(
  QUESTION_LIMIT_ROUTE_PATHS.CREATE_QUESTION_LIMIT,
  validate,
  createQuestionLimit
);

router.put(
  QUESTION_LIMIT_ROUTE_PATHS.EDIT_QUESTION_LIMIT,
  validate,
  editQuestionLimit
);

router.delete(
  QUESTION_LIMIT_ROUTE_PATHS.DELETE_QUESTION_LIMIT,
  deleteQuestionLimit
);

router.get(
  QUESTION_LIMIT_ROUTE_PATHS.GET_QUESTION_LIMIT_BY_ID,
  getQuestionLimitById
);

module.exports = router;
