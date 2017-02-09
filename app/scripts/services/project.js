'use strict';

angular
  .module('tangentDemoApp')
  .factory('ProjectService', ProjectService);

ProjectService.$inject = ['$http', 'ServiceUrls'];
function ProjectService($http, ServiceUrls) {
  var service = {};

  service.GetAll = GetAll;
  service.GetById = GetById;
  service.Create = Create;
  service.Update = Update;
  service.Delete = Delete;

  return service;

  function GetAll() {
    return $http.get(ServiceUrls.ProjectService + 'projects/').then(handleSuccess, handleError('Error getting all projects'));
  }

  function GetById(id) {
    return $http.get(ServiceUrls.ProjectService + 'projects/' + id).then(handleSuccess, handleError('Error getting project by id'));
  }

  function Create(project) {
    return $http.post(ServiceUrls.ProjectService + 'projects/', project).then(handleSuccess, handleError('Error creating project'));
  }

  function Update(project) {
    return $http.put(ServiceUrls.ProjectService + 'projects/' + project.id, project).then(handleSuccess, handleError('Error updating project'));
  }

  function Delete(id) {
    return $http.delete(ServiceUrls.ProjectService + 'projects/' + id).then(handleSuccess, handleError('Error deleting project'));
  }

  // private functions

  function handleSuccess(res) {
    res.success = true;
    return res;
  }

  function handleError(error) {
    return function () {
      return { success: false, message: error };
    };
  }
}
