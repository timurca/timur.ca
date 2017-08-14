var myApp = angular.module('myApp', ['ngRoute']);



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

    .when('/fifth', {
        templateUrl: 'pages/5.html',
        controller: 'Controller5'
    })

    .when('/sixth', {
        templateUrl: 'pages/6.html',
        controller: 'Controller6'
    })

    .when('/seventh', {
        templateUrl: 'pages/7.html',
        controller: 'Controller7'
    })

    .when('/eighth', {
        templateUrl: 'pages/8.html',
        controller: 'Controller8'
    })

    .when('/nineth', {
        templateUrl: 'pages/9.html',
        controller: 'Controller9'
    })

    .when('/tenth', {
        templateUrl: 'pages/10.html',
        controller: 'Controller10'
    })

    .when('/eleventh', {
        templateUrl: 'pages/11.html',
        controller: 'Controller11'
    })

    
});

myApp.controller('menuController', ['$scope', function($scope) {

    $scope.name = 'title_placeholder';


    
}]);

myApp.controller('Controller1', ['$scope', function($scope) {

    $scope.name = 'List #1';
    $scope.handle = liCount('list1', 'num1'); 

    
}]);

myApp.controller('Controller2', ['$scope', function($scope) {
    
    $scope.name = 'List #2';
    $scope.handle = liCount('list2', 'num2');
   
    
}]);

myApp.controller('Controller3', ['$scope', function($scope) {
    
    $scope.name = 'List #3';
    $scope.handle = liCount('list3', 'num3');
   
    
}]);

myApp.controller('Controller4', ['$scope', function($scope) {
    
    $scope.name = 'List #4';
    $scope.handle = liCount('list4', 'num4');
   
    
}]);

myApp.controller('Controller5', ['$scope', function($scope) {
    
    $scope.name = 'List #5';
    $scope.handle = liCount('list5', 'num5');
   
    
}]);

myApp.controller('Controller6', ['$scope', function($scope) {
    
    $scope.name = 'List #6';
    $scope.handle = liCount('list6', 'num6');
   
    
}]);

myApp.controller('Controller7', ['$scope', function($scope) {
    
    $scope.name = 'List #7';
    $scope.handle = liCount('list7', 'num7');
   
    
}]);

myApp.controller('Controller8', ['$scope', function($scope) {
    
    $scope.name = 'List #8';
    $scope.handle = liCount('list8', 'num8');
   
    
}]);

myApp.controller('Controller9', ['$scope', function($scope) {
    
    $scope.name = 'List #9';
    $scope.handle = liCount('list9', 'num9');
   
    
}]);

myApp.controller('Controller10', ['$scope', function($scope) {
    
    $scope.name = 'List #10';
    $scope.handle = liCount('list10', 'num10');
   
    
}]);

myApp.controller('Controller11', ['$scope', function($scope) {
    
    $scope.name = 'List #11';
    $scope.handle = liCount('list11', 'num11');
   
    
}]);


