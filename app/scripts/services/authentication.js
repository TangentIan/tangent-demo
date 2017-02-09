'use strict';

angular
  .module('tangentDemoApp')
  .factory('AuthenticationService', AuthenticationService);

function AuthenticationService($http, $cookies, $rootScope, $timeout, ServiceUrls) {
  var service = {};

  service.Login = Login;
  service.SetCredentials = SetCredentials;
  service.ClearCredentials = ClearCredentials;

  return service;

  function Login(username, password, callback) {
    $http.post(ServiceUrls.UserService + 'api-token-auth/', { username: username, password: password })
      .then(
        function (response) {
          response.success = true;
          callback(response);
        },
        function (response) {
          if (response.data && response.data.non_field_errors && response.data.non_field_errors.length) {
            response.message = response.data.non_field_errors[0];
          } else {
            response.message = 'Oops! Something went wrong. Please try again.';
          }
          response.success = false;
          callback(response);
        }
      );
  }

  function SetCredentials(username, token) {
    $rootScope.globals = {
      currentUser: {
        username: username,
        authdata: token
      }
    };

    // Set the auth header for HTTP requests
    $http.defaults.headers.common.Authorization = token;

    // Store the user details in a globals cookie that keeps a user logged in for 1 week or until they logout
    var cookieExp = new Date();
    cookieExp.setDate(cookieExp.getDate() + 7);
    $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
  }

  function ClearCredentials() {
    $rootScope.globals = {};
    $cookies.remove('globals');
    $http.defaults.headers.common.Authorization = '';
  }
}
