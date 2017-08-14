

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('TodoCtrl', function($scope, $http) {
  $http.get('js/todos.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/1.html',
        controller: 'Controller1'
    })
    
    .when('/second', {
        templateUrl: 'pages/2.html',
        controller: 'Controller2'
    })

    .when('/third', {
        templateUrl: 'pages/3.html',
        controller: 'Controller3'
    })

    .when('/fourth', {
        templateUrl: 'pages/4.html',
        controller: 'Controller4'
    })

    

    
});



