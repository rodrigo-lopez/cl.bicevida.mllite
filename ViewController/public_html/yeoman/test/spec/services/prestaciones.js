'use strict';

describe('Service: Prestaciones', function () {

  // load the service's module
  beforeEach(module('mlliteApp'));

  // instantiate service
  var Prestaciones;
  beforeEach(inject(function (_Prestaciones_) {
    Prestaciones = _Prestaciones_;
  }));

  it('should do something', function () {
    expect(!!Prestaciones).toBe(true);
  });

});
