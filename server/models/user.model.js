
var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto'); //no npm install necessary because part of node js
var jwt = require('jsonwebtoken');
var signature = process.env.SIGNATURE || require('../../config.js').signature;

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 13,
    max: 120,
    required: true
  },
  hash: {
    type: String
  },
  salt: {
    type: String
  }
});

userSchema.methods.setPassword = function(password){
  this.salt  = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64)
                    .toString('hex');
};
userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64)
                    .toString('hex');
  return this.hash === hash; //if equal then you provided the correct password, otherwise NO!
};
userSchema.methods.generateJwt = function(){
  var expiration = new Date();
  expiration.setDate(expiration.getDate() + 7); // this moves the time to 7 days from now

  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiration.getTime() / 1000)
  }, signature);
};

var User = mongoose.model('User', userSchema);
module.exports = User;
