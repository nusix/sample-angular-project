'use strict';

angular.module('myApp.personSimpleDirective', []);

app.directive("personSimpleDirective", function(){
    return {
        // template: 'Direktiiiiiva'
        restrict: 'AE',
        scope: {
            personData: '=data'
        },
        templateUrl: 'shared/directives/person-simple-directive.html'
      };
});
