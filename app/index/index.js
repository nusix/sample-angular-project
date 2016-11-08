'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: '/index/index.html'
    });
}])

.controller('indexCtrl', function($scope, personsService) {
    $scope.indexVar = 99;
    $scope.personsList = {};

    var getPersonsList = function(){
        personsService.getPersonsList(function(data){
            $scope.personsList = data;

            console.log('personsService -> getPersonsList : $scope.personsList', $scope.personsList);
        }, function(res){

            console.error('personsService -> getPersonsList : res', res);
            
        });
    }

    var init = function(){
        getPersonsList();
    }

    init();

    console.info('X2 - indexCtrl - App sample project - spustil sa index controller ');
});