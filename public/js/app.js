(function() {
  var TodoApp;

  TodoApp = angular.module('TodoApp', ['ngRoute']);

  TodoApp.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
      $routeProvider.when("/", {
        templateUrl: "../index.html",
        controller: "TodoCtrl"
      }).otherwise({
        redirectTo: "/tasks"
      });
      return $locationProvider.html5Mode(true);
    }
  ]);

  TodoApp.controller('TodoCtrl', [
    '$scope', '$http', function($scope, $http) {
      $scope.tasks = [];
      $scope.getTasks = function() {
        return $http.get('/tasks').success(function(data) {
          return $scope.tasks = data;
        });
      };
      $scope.getTasks();
      $scope.addTask = function(newTask) {
        console.log($scope.newTask);
        return $http({
          method: 'post',
          url: '/tasks',
          data: $scope.newTask,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).success(function(data) {
          return console.log(data);
        });
      };
      return $scope.deleteTask = function(task) {
        var confirmDelete;
        confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
          return $http["delete"]("/tasks/" + task.id).success(function(data) {
            return $scope.tasks.splice($scope.tasks.indexOf(task), 1);
          });
        }
      };
    }
  ]);

}).call(this);
