'use strict';

describe('Service: Flash', function () {

  beforeEach(module('tangentDemoApp'));

  var service;

  beforeEach(inject(function (FlashService) {
    service = FlashService;
  }));

  it('should exist', function () {
    expect(!!service).toBe(true);
  });

  it('should have a success method', function () {
    expect(service.Success).toBeDefined();
  });

  it('should have an error method', function () {
    expect(service.Error).toBeDefined();
  });
});
