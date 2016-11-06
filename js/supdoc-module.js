var supdoc = angular.module('supdoc', ['ngRoute']);
var database = firebase.database();

supdoc.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            template: '<user></user>'.
        }). otherwise('/');
    }
]);

supdoc.component('user' {
    templateUrl: 'user.htm',
    controller: function UserController($http, $location, $routeParams) {
        //needs to know PCP
        //needs to know doctors home screen
        //needs to know list of doctors
    }
})

supdoc.component('doctor') {
    templateUrl: 'doctor.htm',
    controller: function DoctorController()
    //needs to have a list of patients
    //be able to add patients
}
