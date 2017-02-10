'use strict';

angular.module('tangentDemoApp')
  .component('projectEditComponent', {
    templateUrl: 'views/project-edit.html',
    controller: ProjectEditCtrl,
    controllerAs: 'vm'
  });

ProjectEditCtrl.$inject = ['$rootScope', '$location', '$routeParams', 'ProjectService', 'FlashService'];
function ProjectEditCtrl($rootScope, $location, $routeParams, ProjectService, FlashService) {
  var vm = this;

  function loadCurrentProject(id) {
    ProjectService.GetById(id)
      .then(function(response) {
        if (response.success) {
          vm.project = response.data;
        } else {
          FlashService.Error(response.message);
        }
      });
  }

  vm.updateProject = updateProject;

  function updateProject() {
    vm.dataLoading = true;
    ProjectService.Update(vm.project)
      .then(function(response) {
        if (response.success) {
          $location.path('/projects/' + $routeParams.id + '/view');
        } else {
          FlashService.Error(response.message);
          vm.dataLoading = false;
        }
      });
  }

  function init() {
    loadCurrentProject($routeParams.id);
  }

  init();
}
