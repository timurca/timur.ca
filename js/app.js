var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize']);

myApp.controller('Controller2', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller3', function($scope, data, $sce) {
  $scope.todos = data;
});

myApp.controller('Controller4', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller5', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller6', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller7', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller8', function($scope, data, $sce) {
    $scope.todos = data;
});

myApp.controller('Controller9', function($scope, data, $sce) {
    $scope.todos = data;
});


myApp.service('ApiService', function($http) {
  var api = {};

  api.getDataByPage = function(index) {
    return $http.get('data/data.json').then(function(res) {
        return res.data[0]['page' + index];
    });
  }

  return api;
});

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html'
    })
    
    .when('/travel', {
        templateUrl: 'pages/travel.html',
        controller: 'Controller2',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(2);
            }
        }
    })

    .when('/resources', {
        templateUrl: 'pages/resources.html',
        controller: 'Controller3',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(3);
            }
        }
    })

    .when('/practice', {
        templateUrl: 'pages/practice.html',
        controller: 'Controller4',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(4);
            }
        }
    })

    .when('/freelance', {
        templateUrl: 'pages/freelance.html',
        controller: 'Controller5',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(5);
            }
        }
    })

    .when('/legacy', {
        templateUrl: 'pages/legacy.html',
        controller: 'Controller6',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(6);
            }
        }
    })

    .when('/fulltime', {
        templateUrl: 'pages/fulltime.html',
        controller: 'Controller7',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(7);
            }
        }
    })

    .when('/scorecards', {
        templateUrl: 'pages/scorecards.html',
        controller: 'Controller8',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(8);
            }
        }
    })

    .when('/videos', {
        templateUrl: 'pages/videos.html',
        controller: 'Controller9',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(9);
            }
        }
    })

});