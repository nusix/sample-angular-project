'use strict';

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: '/index/index.html'
    });
}])

.controller('indexCtrl', function($scope, personsService) {

    $scope.indexVar = 99;   //sample var
    $scope.personsList = {};    //list of persons

    //getting personsList object with list of persons from personsService
    var getPersonsList = function(){
        personsService.getPersonsList(function(data){
            //succ cbk
            $scope.personsList = data;

            console.log('indexCtrl -> personsService -> getPersonsList - List of persons was loaded successfully $scope.personsList', $scope.personsList);
        }, function(res){

            //error cbk
            console.error('indexCtrl -> personsService -> getPersonsList - Error occured during the loading List of persons res', res);

        });
    }

    // initialization of application
    var init = function(){
        getPersonsList();
    }

    // app process
    init();

    console.info('indexCtrl - indexCtrl was loaded successfully');
})


// controller for testing
.controller('testCtrl', function() {
    this.ctrlvar = 33;
});