const express = require("express");
const router = express.Router();

const { QUESTION_OPTIONS_ROUTE_PATHS } = require("./route-enums");
const {
  createQuestionOption,
  editQuestionOption,
  deleteQuestionOption,
  getQuestionOptionById,
  getAllQuestionOptions,
} = require("../controllers/question-options-controller");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.use(checkAuth);

router.post(
  QUESTION_OPTIONS_ROUTE_PATHS.CREATE_QUESTION_OPTION,
  validate,
  createQuestionOption
);

router.put(
  QUESTION_OPTIONS_ROUTE_PATHS.EDIT_QUESTION_OPTION,
  validate,
  editQuestionOption
);

router.delete(
  QUESTION_OPTIONS_ROUTE_PATHS.DELETE_QUESTION_OPTION,
  deleteQuestionOption
);

router.get(
  QUESTION_OPTIONS_ROUTE_PATHS.GET_QUESTION_OPTION_BY_ID,
  getQuestionOptionById
);

router.get(
  QUESTION_OPTIONS_ROUTE_PATHS.GET_ALL_QUESTION_OPTIONS,
  getAllQuestionOptions
);

module.exports = router;
