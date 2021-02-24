var express = require('express');
var router = express.Router();

/* GET all stoage plans. */
router.get('/', function(req, res, next) {
  res.send('Welcome Express');
});

module.exports = router;
