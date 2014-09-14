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
      return $scope.addTask = function(newTask) {
        $scope.newTask.done = false;
        return $http.post('/tasks', $scope.newTask).success(function(data) {
          return console.log(data);
        });
      };
    }
  ]);

}).call(this);
