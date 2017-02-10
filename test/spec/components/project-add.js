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

  // @todo:

});
