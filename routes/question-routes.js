const express = require('express');
const router = express.Router();

const { QUESTION_ROUTE_PATHS } = require('./route-enums');
const {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getQuestionById,
  getAllQuestions,
} = require('../controllers/question-controller');

const { validate } = require('../validators/validate');

router.post(QUESTION_ROUTE_PATHS.CREATE_QUESTION, validate, createQuestion);

router.put(QUESTION_ROUTE_PATHS.EDIT_QUESTION, validate, editQuestion);

router.delete(QUESTION_ROUTE_PATHS.DELETE_QUESTION, deleteQuestion);

router.get(QUESTION_ROUTE_PATHS.GET_QUESTION_BY_ID, getQuestionById);

router.get(QUESTION_ROUTE_PATHS.GET_ALL_QUESTIONS, getAllQuestions);

module.exports = router;
