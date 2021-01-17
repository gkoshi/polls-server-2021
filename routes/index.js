const express = require("express");
const router = express.Router();

const userRoutes = require("./user-routes");
const cityRoutes = require("./city-routes");
const addressRoutes = require("./address-routes");

router.use("/users", userRoutes);
router.use("/cities", cityRoutes);
router.use("/address", addressRoutes);

module.exports = router;
