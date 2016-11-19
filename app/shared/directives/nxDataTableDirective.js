'use strict';

angular.module('myApp.nxDataTableDirective', []);

app.directive("nxDataTableDirective", function(){
    return {
        restrict: 'AE',
        scope: {
            personsData: '=data',
            tableTitle: '=title'
        },
        templateUrl: 'shared/directives/nx-data-table-directive.html'
      };
});
