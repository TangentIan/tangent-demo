'use strict';

describe('Component: Login', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    AuthenticationService,
    FlashService;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, _AuthenticationService_, _FlashService_){
    AuthenticationService = _AuthenticationService_;
    FlashService = _FlashService_;
    spyOn(AuthenticationService, 'Login');
    spyOn(AuthenticationService, 'SetCredentials');
    spyOn(AuthenticationService, 'ClearCredentials');
    spyOn(FlashService, 'Error');

    scope = $rootScope.$new();
    element = angular.element('<login-component></login-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('loginComponent');
    httpMock = $httpBackend;
  }));

  // Unit tests

  it('should add a login method to the controller', function () {
    expect(controller.login).toBeDefined();
  });

  it('should call the login method when the form is submitted', function () {
    var form = element.find('form');
    spyOn(controller, 'login');
    form.triggerHandler('submit');
    expect(controller.login).toHaveBeenCalled();
  });

  // Integration tests

  it('should call the authentication service\'s clear method to clear any credentials on instantiation', function () {
    expect(AuthenticationService.ClearCredentials).toHaveBeenCalled();
  });

  it('should call the authentication service\'s login method when the controller\'s login method is called', function () {
    controller.login();
    httpMock.expectPOST(/.*?/).respond();
    expect(AuthenticationService.Login).toHaveBeenCalled();
  });

});
