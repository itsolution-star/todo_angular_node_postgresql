var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  ejs = require('ejs'),
  db = require('./models/index.js'),
  lodash = require('lodash'),
  app = express();

  // Middleware
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.urlencoded({extended: false}));

  // Views
  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  // Routes
  app.get('/', function(req, res) {
    res.render("index");
  });

  app.get('/tasks', function(req, res) {
    db.task.findAll().success(function(tasks) {
      res.json({tasks: tasks});
    }).error(function() {
      res.send('No tasks found.');
    });
  });

  app.get('/tasks/:id', function(req, res) {
    res.send("Task Show");
  });

  app.post('/tasks', function(req, res) {

  });

  app.post('/tasks/:id', function(req, res) {

  });

  app.delete('/tasts/:id', function(req, res) {

  });

  app.listen(3000, function() {
    console.log("SERVER RUNNING");
  });