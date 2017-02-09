'use strict';

angular.module('tangentDemoApp')
  .component('mainComponent', {
    templateUrl: 'views/main.html',
    controller: MainCtrl,
    controllerAs: 'vm'
  });

MainCtrl.$inject = ['$rootScope', 'ProjectService', 'FlashService'];
function MainCtrl($rootScope, ProjectService, FlashService) {
  var vm = this;

  vm.allProjects = [];
  vm.deleteProject = deleteProject;

  function loadCurrentUser() {
    vm.username = $rootScope.globals.currentUser.username;
  }

  function loadAllProjects() {
    ProjectService.GetAll()
      .then(function(response) {
        if (response.success) {
          vm.allProjects = response.data;
        } else {
          FlashService.Error(response.message);
        }
      });
  }

  function deleteProject(id) {
    ProjectService.Delete(id)
      .then(function(response) {
        if (response.success) {
          loadAllProjects();
        } else {
          FlashService.Error(response.message);
        }
      });
  }

  function init() {
    loadCurrentUser();
    loadAllProjects();
  }

  init();
}
