'use strict';

describe('Service: Authentication', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var service;

  beforeEach(inject(function (AuthenticationService) {
    service = AuthenticationService;
  }));

  it('should exist', function () {
    expect(!!service).toBe(true);
  });

  it('should have a login function', function () {
    expect(service.Login).toBeDefined();
  });

  it('should have a set credentials function', function () {
    expect(service.SetCredentials).toBeDefined();
  });

  it('should have a clear credentials function', function () {
    expect(service.ClearCredentials).toBeDefined();
  });
});
