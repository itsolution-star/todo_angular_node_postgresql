TodoApp = angular.module 'TodoApp', ['ngRoute']

TodoApp.config ["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->

  $routeProvider
    .when "/",
      templateUrl: "../index.html"
      controller: "TodoCtrl"
  .otherwise
    redirectTo: "/tasks"

  $locationProvider.html5Mode(true)

]

TodoApp.controller 'TodoCtrl', ['$scope', '$http', ($scope, $http) ->

  $scope.tasks = []

  $scope.getTasks = ->
    $http.get('/tasks').success (data) ->
      $scope.tasks = data

  $scope.getTasks()

  $scope.addTask = (newTask) ->
    $scope.newTask.done = false
    console.log(newTask)
    $http.post('/tasks', $scope.newTask).success (data) ->
      console.log(data)

]