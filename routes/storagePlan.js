const express = require('express');

const { samplePlan } = require('../data/storagePlan')

const router = express.Router();

/* GET all stoage plans. */
router.get('/', (req, res, next) => {
  console.log('samplePlan: ', samplePlan);
  res.json(samplePlan);
});

module.exports = router;
