'use strict';

describe('Component: Main', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller;

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<main-component></main-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('mainComponent');
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(controller.awesomeThings.length).toBe(0);
  });
});
