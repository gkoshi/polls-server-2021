const express = require("express");
const router = express.Router();

const settlementRoutes = require("./settlement-routes");
const ageRangeRoutes = require("./age-range-routes");
const agentsRoutes = require("./agents-routes");
const answersRoutes = require("./answers-routes");
const cityRoutes = require("./city-routes");
const countryRoutes = require("./country-routes");
const questionCategoriesRoutes = require("./question-categories-routes");
const quesitonLimitRoutes = require("./question-limit-routes");
const questionOptionsRoutes = require("./question-options-routes");
const questionRoutes = require("./question-routes");
const adminRoutes = require("./admin-routes");
const journalistRoutes = require("./journalist-routes");
const uploadExcelRoutes = require("./upload-excel-routes");

router.use("/settlement", settlementRoutes);
router.use("/age-range", ageRangeRoutes);
router.use("/agents", agentsRoutes);
router.use("/answers", answersRoutes);
router.use("/city", cityRoutes);
router.use("/country", countryRoutes);
router.use("/question-categories", questionCategoriesRoutes);
router.use("/question-limit", quesitonLimitRoutes);
router.use("/question-options", questionOptionsRoutes);
router.use("/question", questionRoutes);
router.use("/admin", adminRoutes);
router.use("/journalist", journalistRoutes);
router.use("/excel", uploadExcelRoutes);
router.get("/servertest", (req, res) => {
  res.send("Server is up and running");
});

module.exports = router;
