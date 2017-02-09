'use strict';

describe('Component: Main', function () {

  beforeEach(module('tangentDemoApp'));

  var scope,
    element,
    controller,
    httpMock,
    ProjectService,
    FlashService;;

  beforeEach(inject(function($rootScope, $compile, $httpBackend, $q, _ProjectService_, _FlashService_){
    ProjectService = _ProjectService_;
    FlashService = _FlashService_;
    spyOn(ProjectService, 'GetAll').and.callFake(function() {
      var deferred = $q.defer();
      return deferred.promise;
    });
    scope = $rootScope.$new();
    $rootScope.globals = {
      currentUser: {
        username: 'username',
        authdata: 'token'
      }
    };
    element = angular.element('<main-component></main-component>');
    element = $compile(element)(scope);
    scope.$apply();
    controller = element.controller('mainComponent');
    httpMock = $httpBackend;
  }));

  // Unit tests

  it('should add username to the controller', function () {
    expect(controller.username).toBeDefined();
  });

  // Integration tests

  it('should call the project service\'s get all method on instantiation', function () {
    httpMock.expectGET(/.*?/).respond();
    expect(ProjectService.GetAll).toHaveBeenCalled();
  });

});
