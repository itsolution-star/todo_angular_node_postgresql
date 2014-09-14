(function() {
  var TodoApp;

  TodoApp = angular.module('TodoApp', ["ngRoute"]);

  TodoApp.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: "./public/index.html",
        controller: "TodoCtrl"
      }).otherwise({
        redirectTo: '/'
      });
      return $locationProvider.html5Mode(true);
    }
  ]);

  TodoApp.controller('TodoCtrl', [
    '$scope', '$http', function($scope, $http) {
      return $scope.tasks = [];
    }
  ]);

}).call(this);
