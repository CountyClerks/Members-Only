var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'Sign Up' });
});

module.exports = router;
