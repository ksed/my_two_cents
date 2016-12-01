var User = require('./server/models/user.model.js');

// mock up a request object with a body
var req = {};
req.body = {
  email: 'k@s.com',
  age: 66,
  password: 'password'
};

var user = new User(req.body);
console.log(user);
user.setPassword(req.body.password);
console.log(user);
console.log(user.validPassword('1234'));
console.log(user.validPassword('password'));

console.log("JWT", user.generateJwt());
