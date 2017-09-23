var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: '缺钱么运维支撑管理系统-登陆', message:'' });
});
router.get('/registered', function (req, res, next) {
  res.render('registered', { title: '缺钱么运维支撑管理系统-注册', message:'' });
});
module.exports = router;