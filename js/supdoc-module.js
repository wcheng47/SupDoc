

var supdoc = angular.module('supdoc', ['ngRoute']);
var app = angular.module("sampleApp", ["firebase"]);
//var database = firebase.database();

supdoc.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'user.htm'
        }).otherwise('/');
    }
]);

supdoc.component('user', {
    templateUrl: 'user.htm',
    controller: function UserController($http, $location, $routeParams) {
        //needs to know PCP
        //needs to know doctors home screen
        //needs to know list of doctors
    }
});

supdoc.component('doctor', {
    templateUrl: 'doctor.htm',
    controller: function DoctorController() {

    }
    //needs to have a list of patients
    //be able to add patients
});

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

  // download the data into a local object
  $scope.data = $firebaseObject(ref);

  // putting a console.log here won't work, see below

  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
  // click on `index.html` above to see $remove() and $save() in action

  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);
  // login with Facebook
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
});


