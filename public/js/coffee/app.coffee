TodoApp = angular.module 'TodoApp', ["ngRoute"]

TodoApp.config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $routeProvider
    .when '/',
      templateUrl: "../../../views/index.html",
      controller: "TodoCtrl"
  .otherwise
      redirectTo: '/'

  $locationProvider.html5Mode(true)

]

TodoApp.controller 'TodoCtrl', ['$scope', '$http', ($scope, $http) ->

  $scope.tasks = []

]