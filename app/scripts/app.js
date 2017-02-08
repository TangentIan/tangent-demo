'use strict';

/**
 * @ngdoc overview
 * @name tangentDemoApp
 * @description
 * # tangentDemoApp
 *
 * Main module of the application.
 */
angular
  .module('tangentDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(config)
  .run(run);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<main-component></main-component>'
    })
    .when('/login', {
      template: '<login-component></login-component>'
    })
    .otherwise({
      redirectTo: '/login'
    });
}

function run($rootScope, $location, $cookies, $http) {
  // Keep the user logged in
  $rootScope.globals = $cookies.getObject('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
  }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // Redirect to the login page if not logged in and trying to access a restricted page
    var restrictedPage = $.inArray($location.path(), ['/login']) === -1;
    var loggedIn = $rootScope.globals.currentUser;
    if (restrictedPage && !loggedIn) {
      $location.path('/login');
    }
  });
}
