var express = require('express');
var router = express.Router();
var actions = require('./user.action');

router.post('/login', actions.login);
router.post('/register', actions.register);
module.exports = router;