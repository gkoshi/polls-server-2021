const express = require('express');
const router = express.Router();

const { QUESTION_CATEGORY_ROUTE_PATHS } = require('./route-enums');
const {
  createQuestionCategory,
  editQuestionCategory,
  deleteQuestionCategory,
  getQuestionCategoryById,
  getAllQuestionCategories,
} = require('../controllers/question-categories-controller');

const { validate } = require('../validators/validate');

router.post(
  QUESTION_CATEGORY_ROUTE_PATHS.CREATE_QUESTION_CATEGORY,
  validate,
  createQuestionCategory
);

router.put(
  QUESTION_CATEGORY_ROUTE_PATHS.EDIT_QUESTION_CATEGORY,
  validate,
  editQuestionCategory
);

router.delete(
  QUESTION_CATEGORY_ROUTE_PATHS.DELETE_QUESTION_CATEGORY,
  deleteQuestionCategory
);

router.get(
  QUESTION_CATEGORY_ROUTE_PATHS.GET_QUESTION_CATEGORY_BY_ID,
  getQuestionCategoryById
);

router.get(
  QUESTION_CATEGORY_ROUTE_PATHS.GET_ALL_QUESTION_CATEGORIES,
  getAllQuestionCategories
);

module.exports = router;
