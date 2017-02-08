'use strict';

angular.module('tangentDemoApp')
  .component('loginComponent', {
    templateUrl: 'views/login.html',
    controller: LoginCtrl,
    controllerAs: 'vm'
  });

function LoginCtrl($location, AuthenticationService, FlashService) {
  var vm = this;

  vm.login = function() {
    vm.dataLoading = true;
    AuthenticationService.Login(vm.username, vm.password, function (response) {
      if (response.success) {
        AuthenticationService.SetCredentials(vm.username, vm.password);
        $location.path('/');
      } else {
        FlashService.Error(response.message);
        vm.dataLoading = false;
      }
    });
  };

  vm.init = function() {
    // Reset the login status
    AuthenticationService.ClearCredentials();
  };

  vm.init();
}
