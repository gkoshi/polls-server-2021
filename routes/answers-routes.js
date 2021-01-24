const express = require("express");
const router = express.Router();

const { ANSWER_ROUTE_PATHS } = require("./route-enums");
const {
  createAnswer,
  editAnswer,
  deleteAnswer,
  getAnswerById,
  getAllAnswers,
} = require("../controllers/answers-controller");

const { validate } = require("../validators/validate");

router.post(ANSWER_ROUTE_PATHS.CREATE_ANSWER, validate, createAnswer);

router.put(ANSWER_ROUTE_PATHS.EDIT_ANSWER, validate, editAnswer);

router.delete(ANSWER_ROUTE_PATHS.DELETE_ANWWER, deleteAnswer);

router.get(ANSWER_ROUTE_PATHS.GET_ANSWER_BY_ID, getAnswerById);

router.get(ANSWER_ROUTE_PATHS.GET_ALL_ANSWERS, getAllAnswers);

module.exports = router;
