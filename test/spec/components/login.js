'use strict';

describe('Component: Login', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var scope,
    controller;

  // Initialize the component and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    controller = $componentController('loginComponent', {
      $scope: scope
    });
  }));

  it('should attach a function login to the controller', function () {
    expect(controller.login).toBeDefined();
  });

  it('should attach a function init to the controller', function () {
    expect(controller.init).toBeDefined();
  });
});
