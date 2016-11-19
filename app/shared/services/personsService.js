'use strict';

angular.module('myApp.personsService', []);

//service for persons data
app.service("personsService", function($http){
    
    // object for storing data about person
    var Person = function(id, age, name, surname, email, phone){
        this._id = id;
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    };

    // object for storing data about list of person object
    var PersonsList = function(){
        this.persons = [];

        // filling persons property with list of person object
        this.fillList = function(list){
            this.persons = list.map(function(el){
                return new Person(el._id, el.age, el.name, el.surname, el.email, el.phone);
            });
        };
    };

    // loading persons data from backend via REST
    this.getPersonsList = function(successCbk, errorCbk){
        var pList = new PersonsList();  //empty list object

        //used locale JSON file with dummy data instead of real request
        $http.get("/shared/jsons/persons.json").then(function(res){

            pList.fillList(res.data);   //filling the list
            successCbk(pList);  //succ cbk called from controller

        }, function (res) {
            errorCbk(res);  //error cbk called from controller
        });
    };

});