describe('Controllers', function(){ //describe object type

    beforeEach(module('myApp')); //load module

    describe('index',function(){ //describe app name

        var myCtrl;

        beforeEach(inject(function($controller){ //instantiate controller using $controller service
            myCtrl = $controller('testCtrl');
        }));

        it('Sample test 1 : Testing value of controller\'s variable', function(){  //write tests
            expect(myCtrl.ctrlvar).toBe(66); //fail
            expect(myCtrl.ctrlvar).toBe(33); //pass
        });

    });
});