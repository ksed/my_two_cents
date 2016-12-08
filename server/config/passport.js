var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.model.js');

/**
* This is a modifier to the passport module that allows us to use what is called
* a LocalStrategy (our own database for usernames and passwords). This function
* is run to change how passport operates and validates a user. This will alter our
* login routes to find and provide a user to the route handler (function that
* runs when we try to login).
*/
passport.use(new LocalStrategy({
  usernameField: 'email'
  /**
   * We are telling passport to use the email field on req.body as the username
   * for our authentication scheme.
   * */
}, function(username, password, done){
  /**
   * This function is a callback function that runs to complete the inner workings
   * of the LocalStrategy.
   * */
  User.findOne({email: username}, function(err, user){ //find the user based on the email listed in the database
    //If an error occurs then 'err' will be defined and the below if statement will run
    if(err){
      return done(err); //we are saying that the current function that is running is done and passes the error to the next handler
    }
    if(!user){ //if a user is not found in the database then pass no error -> null, false for user, and a small bit of data (msg)
      return done(null, false, {
        msg: "User not found"
      });
    }
    if(!user.validPassword(password)){ //If the user provided the incorrect password then pass no error, false for the user, and some data (different message)
      return done(null, false, {
        msg: 'Authentication Failed'
      });
    }
    return done(null, user); //otherwise, the user is authenticated and pass that information forward
  });
}));
