'use strict';

describe('Controller: CargaafiliadoCtrl', function () {

  // load the controller's module
  beforeEach(module('mlliteApp'));

  var CargaafiliadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CargaafiliadoCtrl = $controller('CargaafiliadoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
