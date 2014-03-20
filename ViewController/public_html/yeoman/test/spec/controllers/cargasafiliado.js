'use strict';

describe('Controller: CargasafiliadoCtrl', function () {

  // load the controller's module
  beforeEach(module('mlliteApp'));

  var CargasafiliadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CargasafiliadoCtrl = $controller('CargasafiliadoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
