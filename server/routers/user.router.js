var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

router.get('/users/profile/:userId', function(req, res) {
  User.find({ _id: req.params.userId }, function(err, user) {
    if(err) {
      return res.status(500).json({
        err: err
      });
    }
    return res.status(200).json({
      user: user
    });
  });
});
router.post('/users/signup/', function(req, res) {

});
router.post('/users/login/', function(req, res) {});
router.put('/users/profile/:userId', function(req, res) {});

module.exports = router;
