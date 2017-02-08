'use strict';

angular.module('tangentDemoApp')
  .constant('ServiceUrls', {
    'UserService': 'http://userservice.staging.tangentmicroservices.com:80/',
    'ProjectService': 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/'
  });
