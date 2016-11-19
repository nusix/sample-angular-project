'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.index',
    'myApp.page2',
    'myApp.personsService',
    'myApp.nxDataTableDirective'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/index'});
}]);


// main controller of application
app.controller("mainCtrl", function($scope) {
    $scope.dummyVar = 66;

    console.info('mainCtrl - mainCtrl was loaded successfully');
});
