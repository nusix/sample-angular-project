'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: '/index/index.html'
    });
}])

.controller('indexCtrl', function($scope) {
    $scope.indexVar = 99;

    console.info('X2 - indexCtrl - App sample project - spustil sa index controller ');
});