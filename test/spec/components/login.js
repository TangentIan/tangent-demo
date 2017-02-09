'use strict';

describe('Component: Login', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock;

  beforeEach(inject(function($rootScope, $compile, $httpBackend){
    scope = $rootScope.$new();
    element = angular.element('<login-component></login-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('loginComponent');
    httpMock = $httpBackend;
  }));

  it('should attach a function login to the controller', function () {
    expect(controller.login).toBeDefined();
  });

  it('should attach a function init to the controller', function () {
    expect(controller.init).toBeDefined();
  });

  it('should call the login function when the form is submitted', function () {
    var form = element.find('form');
    httpMock.expectPOST(/.*?/).respond();
    spyOn(controller, 'login');
    form.triggerHandler('submit');
    expect(controller.login).toHaveBeenCalled();
  });
});
