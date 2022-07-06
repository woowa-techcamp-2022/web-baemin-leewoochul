const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: '배민 회원가입' });
});

module.exports = router;
