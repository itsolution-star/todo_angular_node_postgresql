var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  ejs = require('ejs'),
  app = express();

  // Middleware
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.urlencoded({extended: false}));

  app.set('view engine', 'ejs');

  // Routes

  app.get('/', function(req, res) {
    res.render("index");
  })

  app.listen(3000, function() {
    console.log("SERVER RUNNING")
  })