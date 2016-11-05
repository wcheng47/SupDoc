var supdoc = angular.module('supdoc', ['ngRoute']);

supdoc.config(['$locationProvider', $routeProvider,
    function config($locationProvider, $routeProvider) {
        $routeProvider.when('/', {
            template: '<sign-in></sign-in>'.
        }). otherwise('/');
    }
]);