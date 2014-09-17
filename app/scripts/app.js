'use strict';

/**
 * @ngdoc overview
 * @name ifritApp
 * @description
 * # ifritApp
 *
 * Main module of the application.
 */
angular
  .module('ifritApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/employeeInfo', {
        templateUrl: 'views/employeeinfo.html',
        controller: 'EmployeeinfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
