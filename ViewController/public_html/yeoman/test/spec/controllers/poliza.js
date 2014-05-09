'use strict';

describe('Controller: PolizaCtrl', function () {

  // load the controller's module
  beforeEach(module('mlliteApp'));

  var PolizaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolizaCtrl = $controller('PolizaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
