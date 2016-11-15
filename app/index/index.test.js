describe('Controllers', function(){ //describe your object type

    beforeEach(module('myApp')); //load module<br />

    describe('index',function(){ //describe your app name<br />

        var myctrl;

        beforeEach(inject(function($controller){ //instantiate controller using $controller service
            myctrl = $controller('testCtrl');
        }));

        it('Mode should be fun', function(){  //write tests
            expect(myctrl.asd).toBe(66); //fail
            // expect(myctrl.asd).toBe(33); //pass
        });

    });
});