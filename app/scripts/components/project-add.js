'use strict';

angular.module('tangentDemoApp')
  .component('projectAddComponent', {
    templateUrl: 'views/project-add.html',
    controller: ProjectAddCtrl,
    controllerAs: 'vm'
  });

ProjectAddCtrl.$inject = ['$rootScope', '$location', 'ProjectService', 'FlashService'];
function ProjectAddCtrl($rootScope, $location, ProjectService, FlashService) {
  var vm = this;

  vm.addProject = addProject;

  function addProject() {
    vm.dataLoading = true;
    ProjectService.Create(vm.project)
      .then(function(response) {
        if (response.success) {
          $location.path('/');
        } else {
          FlashService.Error(response.message);
          vm.dataLoading = false;
        }
      });
  }
}
