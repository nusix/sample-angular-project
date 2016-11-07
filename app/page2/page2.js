'use strict';

angular.module('myApp.page2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/page2', {
        templateUrl: '/page2/page2.html'
    });
}])

.controller('page2Ctrl', function($scope) {
    $scope.page2Var = 33;

    console.info('X2 - page2Ctrl - App sample project - spustil sa page2 controller ');
});