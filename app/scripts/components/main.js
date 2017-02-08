'use strict';

angular.module('tangentDemoApp')
  .component('mainComponent', {
    templateUrl: 'views/main.html',
    controller: MainCtrl,
    controllerAs: 'vm'
  });

function MainCtrl() {
  var vm = this;

  vm.awesomeThings = [];
}
