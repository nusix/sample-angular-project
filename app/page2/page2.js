'use strict';

angular.module('myApp.page2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/page2', {
        templateUrl: '/page2/page2.html'
    });
}])

.controller('page2Ctrl', function($scope) {
    $scope.page2Var = 68;

    console.info('page2Ctrl - page2Ctrl was loaded successfully');
});