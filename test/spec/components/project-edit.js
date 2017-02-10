'use strict';

describe('Component: Project Edit', function () {

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
    element = angular.element('<project-edit-component></project-edit-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('projectEditComponent');
    httpMock = $httpBackend;
  }));

  // Unit tests

  it('should add an update project method to the controller', function () {
    expect(controller.updateProject).toBeDefined();
  });

  // Integration tests

  it('should call the project service\'s get by id method on instantiation', function () {
    httpMock.expectGET(/.*?/).respond();
    expect(ProjectService.GetById).toHaveBeenCalled();
  });

});
