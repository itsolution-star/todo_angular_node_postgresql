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
    console.log($scope.newTask)
    $http
      method: 'post',
      url: '/tasks',
      data: $scope.newTask,
      headers: {"Content-Type" : "application/x-www-form-urlencoded"}
    .success (data) ->
      console.log(data)


  $scope.deleteTask = (task) ->
    confirmDelete = confirm "Are you sure you want to delete this task?"
    if confirmDelete
      $http.delete("/tasks/#{task.id}").success (data) ->
        $scope.tasks.splice($scope.tasks.indexOf(task), 1)

]