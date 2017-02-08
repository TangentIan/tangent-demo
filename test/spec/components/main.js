'use strict';

describe('Component: Main', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var controller,
    scope;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    controller = $componentController('mainComponent', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the controller', function () {
    expect(controller.awesomeThings.length).toBe(0);
  });
});
