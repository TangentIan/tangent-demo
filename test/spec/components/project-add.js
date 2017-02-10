'use strict';

describe('Component: Project Add', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    ProjectService;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, _ProjectService_){
    ProjectService = _ProjectService_;

    scope = $rootScope.$new();
    element = angular.element('<project-add-component></project-add-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('projectAddComponent');
    httpMock = $httpBackend;
  }));

  // Unit tests

  it('should add an add project method to the controller', function () {
    expect(controller.addProject).toBeDefined();
  });

  it('should call the add project method when the form is submitted', function () {
    var form = element.find('form');
    spyOn(controller, 'addProject');
    form.triggerHandler('submit');
    expect(controller.addProject).toHaveBeenCalled();
  });

});
