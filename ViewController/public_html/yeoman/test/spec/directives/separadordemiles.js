'use strict';

describe('Directive: separadorDeMiles', function () {

  // load the directive's module
  beforeEach(module('mlliteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<separador-de-miles></separador-de-miles>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the separadorDeMiles directive');
  }));
});
