'use strict';

describe('Directive: validarRut', function () {

  // load the directive's module
  beforeEach(module('mlliteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<validar-rut></validar-rut>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validarRut directive');
  }));
});
