var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  ejs = require('ejs'),
  db = require('./models/index.js'),
  lodash = require('lodash'),
  app = express();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

// Views
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routes
app.get('/tasks', function(req, res) {
  db.task.findAll().success(function(tasks) {
    res.json(tasks);
  }).error(function() {
    res.send('No tasks found.');
  });
});

app.get('/tasks/:id', function(req, res) {
  var id = req.params.id;
  db.task.find(id).success(function(task) {
    res.json({task: task});
  });
});

app.post('/tasks', function(req, res) {
  console.log(req.body)
  var newTask = req.body;
  db.task.create({text: newTask.text, done: false}).success(function(task) {
    res.json(task);
  });
});

app.put('/tasks/:id', function(req, res) {
  var id = req.params.id;
  var updateTask = req.body;
  db.task.find(id).success(function(task) {
    task.updateAttributes(updateTask).success(function(task) {
      res.json({task: task});
    });
  });
});

app.delete('/tasks/:id', function(req, res) {
  var id = req.params.id;
  db.task.find(id).success(function(task) {
    task.destroy();
    res.json({message: "Task destroyed"});
  });
});

// loads the angular singlepage template
app.get('*', function(req, res) {
  res.render('./public/index.html');
});

app.listen(3000, function() {
  console.log("SERVER RUNNING");
});