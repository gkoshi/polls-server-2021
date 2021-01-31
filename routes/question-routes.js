const express = require("express");
const router = express.Router();

const { QUESTION_ROUTE_PATHS } = require("./route-enums");
const {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getQuestionById,
  getAllQuestions,
} = require("../controllers/question-controller");

const { imageUpload } = require("../middlewares/file-upload");

const { validate } = require("../validators/validate");

const checkAuth = require("../middlewares/check-auth");

router.use(checkAuth);

router.post(
  QUESTION_ROUTE_PATHS.CREATE_QUESTION,
  imageUpload.single("image"),
  validate,
  createQuestion
);

router.put(
  QUESTION_ROUTE_PATHS.EDIT_QUESTION,
  imageUpload.single("image"),
  validate,
  editQuestion
);

router.delete(QUESTION_ROUTE_PATHS.DELETE_QUESTION, deleteQuestion);

router.get(QUESTION_ROUTE_PATHS.GET_QUESTION_BY_ID, getQuestionById);

router.get(QUESTION_ROUTE_PATHS.GET_ALL_QUESTIONS, getAllQuestions);

module.exports = router;
