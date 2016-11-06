var login = angular.module('login', ['ngRoute']);
var bla = $('#txt_name').val();
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var firstname = document.getElementById('first_name').value;
var lastname = document.getElementById('last_name').value;
var doc = document.getElementById('selected_doctor').value;

login.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'signup.htm'
        }).when('/signin', {
            templateUrl : 'signin.htm'
        }).otherwise('/');
    }
]);

login.component('signup', {
    templateUrl: 'signup.htm',
    controller: function SignUpController($http, $location, $routeParams) {

    }
});

login.component('signin', {
    templateUrl: 'signin.htm',
    controller: function SignInController() {

    }
});

function signIn() {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password. Please try again.');
    } else if (errorCode === 'auth/user-not-found') {
    	alert('No user matching that email address.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
}

function createUser() {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/email-already-in-use') {
      alert('You may already have an account, please follow the "forgot my passwork" link.');
    } else if (errorCode === 'auth/invalid-email') {
    	alert('Invalid email address.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
  firebase.database().ref('users/' + userId).set({
      firstname: firstName,
      lastname: lastName,
      emailaddress: email,
      doctor: doc
  });
}

// ref.onAuth(function(authData) {
//   if (authData && isNewUser) {
//     // save the user's profile into the database so we can list users,
//     // use them in Security and Firebase Rules, and show profiles
// 	  firebase.database().ref('users/' + userId).set({
// 	    firstname: firstName,
// 	    lastname: lastName,
// 	    emailaddress: email,
// 	    doctor: doc
// 	  });
//   }
// });

// function writeUserData(userId, firstName, lastName, email, doc) {
//   firebase.database().ref('users/' + userId).set({
//     firstname: firstName,
//     lastname: lastName,
//     email: email,
//     doctor: doc
//   });
// }