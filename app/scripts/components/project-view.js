'use strict';

angular.module('tangentDemoApp')
  .component('projectViewComponent', {
    templateUrl: 'views/project-view.html',
    controller: ProjectViewCtrl,
    controllerAs: 'vm'
  });

ProjectViewCtrl.$inject = ['$rootScope', '$location', '$routeParams', 'ProjectService', 'FlashService'];
function ProjectViewCtrl($rootScope, $location, $routeParams, ProjectService, FlashService) {
  var vm = this;

  vm.editProject = editProject;
  vm.deleteProject = deleteProject;

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

  function editProject(id) {
    $location.path('/projects/' + id + '/edit');
  }

  function deleteProject(id) {
    vm.dataLoading = true;
    ProjectService.Delete(id)
      .then(function(response) {
        if (response.success) {
          $location.path('/');
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
