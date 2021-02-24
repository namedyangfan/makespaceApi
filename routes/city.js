const express = require('express');

const {avaliableCity} = require('../data/avaliableCity')
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(avaliableCity);
});

module.exports = router;
