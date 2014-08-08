var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/p1', function(req, res) {
  res.json(['respond with a resource2']);
});

module.exports = router;
