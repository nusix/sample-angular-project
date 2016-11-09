'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.index',
    'myApp.page2',
    'myApp.personsService',
    'myApp.personSimpleDirective'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/index'});
}]);

app.controller("mainCtrl", function($scope) {
    $scope.var = 66;

    console.info('X1 - mainCtrl - App sample project sa spustila ');
});
