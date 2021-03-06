/* jshint unused: false */
'use strict';

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

config.$inject = ['$routeProvider'];
function config($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<main-component></main-component>'
    })
    .when('/login', {
      template: '<login-component></login-component>'
    })
    .when('/projects/add', {
      template: '<project-add-component></project-add-component>'
    })
    .when('/projects/:id/view', {
      template: '<project-view-component></project-view-component>'
    })
    .when('/projects/:id/edit', {
      template: '<project-edit-component></project-edit-component>'
    })
    .otherwise({
      redirectTo: '/login'
    });
}

run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
function run($rootScope, $location, $cookies, $http) {
  // Keep the user logged in
  $rootScope.globals = $cookies.getObject('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common.Authorization = $rootScope.globals.currentUser.authdata;
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
