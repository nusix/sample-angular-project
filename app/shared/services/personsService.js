'use strict';

angular.module('myApp.personsService', [])

app.service("personsService", function($http){
    
    var Person = function(id, age, name, surname, email, phone){
        this._id = id;
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    };

    var PersonsList = function(){
        this.persons = [];

        this.fillList = function(list){
            this.persons = list.map(function(el){
                return new Person(el._id, el.age, el.name, el.surname, el.email, el.phone);
            });
        };
    };

    this.getPersonsList = function(successCbk, errorCbk){
        var pList = new PersonsList();

        $http.get("/shared/jsons/persons.json").then(function(res){

            pList.fillList(res.data);
            successCbk(pList);

        }, function (res) {
            errorCbk(res);
        });
    };

});