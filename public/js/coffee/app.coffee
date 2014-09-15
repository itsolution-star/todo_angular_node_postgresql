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
  $scope.showEdit = []

  $scope.allTasks = ->
    $http.get('/tasks').success (data) ->
      $scope.tasks = data

  $scope.allTasks()

  $scope.addTask = (task) ->
    $http.post('/tasks', $scope.newTask).success (data) ->
      $scope.newTask = {}
      $scope.tasks.unshift(data)

  $scope.deleteTask = (task) ->
    confirmDelete = confirm "Are you sure you want to delete this task?"
    if confirmDelete
      $http.delete("/tasks/#{task.id}").success (data) ->
        $scope.tasks.splice($scope.tasks.indexOf(task), 1)

  $scope.editTask = (index) ->
    $scope.showEdit = []
    $scope.showEdit[index] = true

  $scope.closeEdits = ->
    $scope.showEdit = []

  $scope.updateTask = (task) ->
    $http.put("/tasks/#{task.id}", {text: @task.text, done: @task.done}).success (data) ->
      $scope.task = {}
      $scope.showEdit = []

]