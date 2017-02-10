'use strict';

describe('Component: Project View', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    ProjectService;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, _ProjectService_){
    ProjectService = _ProjectService_;

    scope = $rootScope.$new();
    element = angular.element('<project-view-component></project-view-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('projectViewComponent');
    httpMock = $httpBackend;
  }));

  // @todo:

});
