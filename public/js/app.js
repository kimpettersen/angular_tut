'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/phones', {templateUrl: 'partials/phones', controller: PhoneListCtrl});
    $routeProvider.when('/stuff', {templateUrl: 'partials/stuff', controller: PhoneListCtrl});
    $routeProvider.otherwise({redirectTo: '/phones'});
    $locationProvider.html5Mode(true);
  }]);