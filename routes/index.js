const express = require('express');
const router = express.Router();

const addressRoutes = require('./address-routes');
const ageRangeRoutes = require('./age-range-routes');
const agentsRoutes = require('./agents-routes');
const answersRoutes = require('./answers-routes');
const cityRoutes = require('./city-routes');
const countryRoutes = require('./country-routes');
const questionCategoriesRoutes = require('./question-categories-routes');
const quesitonLimitRoutes = require('./question-limit-routes');
const questionOptionsRoutes = require('./question-options-routes');
const questionRoutes = require('./question-routes');
const userRoutes = require('./user-routes');

router.use('/address', addressRoutes);
router.use('/age-range', ageRangeRoutes);
router.use('/agents', agentsRoutes);
router.use('/answers', answersRoutes);
router.use('/cities', cityRoutes);
router.use('/country', countryRoutes);
router.use('/question-categories', questionCategoriesRoutes);
router.use('/question-limit', quesitonLimitRoutes);
router.use('/question-options', questionOptionsRoutes);
router.use('/question', questionRoutes);
router.use('/users', userRoutes);

module.exports = router;
