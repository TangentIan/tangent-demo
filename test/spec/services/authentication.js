'use strict';

describe('Service: Authentication', function () {

  beforeEach(module('tangentDemoApp'));

  var service;

  beforeEach(inject(function (AuthenticationService) {
    service = AuthenticationService;
  }));

  it('should exist', function () {
    expect(!!service).toBe(true);
  });

  it('should have a login method', function () {
    expect(service.Login).toBeDefined();
  });

  it('should have a set credentials method', function () {
    expect(service.SetCredentials).toBeDefined();
  });

  it('should have a clear credentials method', function () {
    expect(service.ClearCredentials).toBeDefined();
  });
});
