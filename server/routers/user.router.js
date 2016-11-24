var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

router.get('/users/profile/:userId', function(req, res) {
  
});
router.post('/users/signup/', function(req, res) {});
router.post('/users/login/', function(req, res) {});
router.put('/users/profile/:userId', function(req, res) {});

module.exports = router;
