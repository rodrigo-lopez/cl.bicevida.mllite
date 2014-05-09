'use strict';

describe('Controller: TipoprestacionCtrl', function () {

  // load the controller's module
  beforeEach(module('mlliteApp'));

  var TipoprestacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TipoprestacionCtrl = $controller('TipoprestacionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
