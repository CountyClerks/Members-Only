var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/new-message', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
