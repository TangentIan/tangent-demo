'use strict';

describe('Service: Flash', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var service;

  beforeEach(inject(function (FlashService) {
    service = FlashService;
  }));

  it('should exist', function () {
    expect(!!service).toBe(true);
  });

  it('should have a success function', function () {
    expect(service.Success).toBeDefined();
  });

  it('should have an error function', function () {
    expect(service.Error).toBeDefined();
  });
});
