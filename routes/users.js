var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bbb', function(req, res, next) {
  res.send('bbbb');
});

module.exports = router;
