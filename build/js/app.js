var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize']);

myApp.controller('Controller2', function($scope, data, $sce) {
    console.log(data);
    $scope.todos = data;
    // $scope.trustedHtml = function(html){
    //   return $sce.trustAsHtml(html);
    // }
});

myApp.controller('Controller3', function($scope, data, $sce) {
  $scope.todos = data;
   $scope.trustedHtml = function(html){
      return $sce.trustAsHtml(html);
    }
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
    return $http.get('js/data.json').then(function(res) {
        return res.data[0]['page' + index];
    });
  }

  return api;
});

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/1.html'
    })
    
    .when('/second', {
        templateUrl: 'pages/2.html',
        controller: 'Controller2',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(2);
            }
        }
    })

    .when('/third', {
        templateUrl: 'pages/3.html',
        controller: 'Controller3',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(3);
            }
        }
    })

    .when('/fourth', {
        templateUrl: 'pages/4.html',
        controller: 'Controller4',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(4);
            }
        }
    })

    .when('/five', {
        templateUrl: 'pages/5.html',
        controller: 'Controller5',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(5);
            }
        }
    })

    .when('/six', {
        templateUrl: 'pages/6.html',
        controller: 'Controller6',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(6);
            }
        }
    })

    .when('/seven', {
        templateUrl: 'pages/7.html',
        controller: 'Controller7',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(7);
            }
        }
    })

    .when('/eight', {
        templateUrl: 'pages/8.html',
        controller: 'Controller8',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(8);
            }
        }
    })

    .when('/nine', {
        templateUrl: 'pages/9.html',
        controller: 'Controller9',
        resolve: {
            data: function(ApiService) {
                return ApiService.getDataByPage(9);
            }
        }
    })

});