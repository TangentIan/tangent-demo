'use strict';

describe('Component: Project View', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    ProjectService;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, $q, _ProjectService_){
    ProjectService = _ProjectService_;
    spyOn(ProjectService, 'GetById').and.callFake(function() {
      var deferred = $q.defer();
      return deferred.promise;
    });

    scope = $rootScope.$new();
    element = angular.element('<project-view-component></project-view-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('projectViewComponent');
    httpMock = $httpBackend;
  }));

  // Unit tests

  it('should add an edit project method to the controller', function () {
    expect(controller.editProject).toBeDefined();
  });

  it('should add a delete project method to the controller', function () {
    expect(controller.deleteProject).toBeDefined();
  });

  // Integration tests

  it('should call the project service\'s get by id method on instantiation', function () {
    httpMock.expectGET(/.*?/).respond();
    expect(ProjectService.GetById).toHaveBeenCalled();
  });

});
