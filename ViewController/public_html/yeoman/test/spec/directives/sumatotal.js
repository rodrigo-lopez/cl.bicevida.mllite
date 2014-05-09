'use strict';

describe('Directive: sumaTotal', function () {

  // load the directive's module
  beforeEach(module('mlliteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<suma-total></suma-total>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sumaTotal directive');
  }));
});
