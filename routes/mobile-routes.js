const express = require("express");
const router = express.Router();

const checkMobileAuth = require("../middlewares/check-mobile-auth");
const {
  registerUser,
  selectQuestionCategory,
  getAllQuestionCategories
} = require("../controllers/mobile-controller");
const { MOBILE_PATHS } = require("./route-enums");

router.post(MOBILE_PATHS.REGISTER_USER, registerUser);

// router.use(checkMobileAuth);

router.put(MOBILE_PATHS.SELECT_QUESTION_CATEGORY, selectQuestionCategory);

router.get(MOBILE_PATHS.QUESTION_CATEGORIES, getAllQuestionCategories);

module.exports = router;
