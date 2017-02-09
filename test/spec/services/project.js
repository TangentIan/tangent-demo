'use strict';

describe('Service: Project', function () {

  beforeEach(module('tangentDemoApp'));

  var service;

  beforeEach(inject(function (ProjectService) {
    service = ProjectService;
  }));

  it('should exist', function () {
    expect(!!service).toBe(true);
  });

  it('should have a get all method', function () {
    expect(service.GetAll).toBeDefined();
  });

  it('should have a get by id method', function () {
    expect(service.GetById).toBeDefined();
  });

  it('should have a create method', function () {
    expect(service.Create).toBeDefined();
  });

  it('should have a update method', function () {
    expect(service.Update).toBeDefined();
  });

  it('should have a delete method', function () {
    expect(service.Delete).toBeDefined();
  });
});
