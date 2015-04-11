'use strict';

describe('Controller: MeryCtrl', function () {

  // load the controller's module
  beforeEach(module('myAngularApp'));

  var MeryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeryCtrl = $controller('MeryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
