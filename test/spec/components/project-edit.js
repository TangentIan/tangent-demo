'use strict';

describe('Component: Project Edit', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    ProjectService;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, _ProjectService_){
    ProjectService = _ProjectService_;

    scope = $rootScope.$new();
    element = angular.element('<project-edit-component></project-edit-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('projectEditComponent');
    httpMock = $httpBackend;
  }));

  // @todo:

});
