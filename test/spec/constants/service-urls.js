'use strict';

describe('Constant: ServiceUrls', function () {

  // load the component's module
  beforeEach(module('tangentDemoApp'));

  var constant;

  beforeEach(inject(function (ServiceUrls) {
    constant = ServiceUrls;
  }));

  it('should exist', function () {
    expect(!!constant).toBe(true);
  });

  it('should have a user service URL', function () {
    expect(constant.UserService).toBeDefined();
  });

  it('should have a project service URL', function () {
    expect(constant.ProjectService).toBeDefined();
  });
});
