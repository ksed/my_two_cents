var express = require('express');
var server = express();
var mongoose = require('mongoose');
var postRouter = require('./server/routers/post.router.js');
var userRouter = require('./server/routers/user.router.js');
var bodyParser = require('body-parser');
var passport = require('passport');

require('./server/config/passport.js'); //this configures passport

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + '/public'));

mongoose.connect(mongoURI); //establish the connection to the mongo database

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});
server.use(postRouter);
server.use(userRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
