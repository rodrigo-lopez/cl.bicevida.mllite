'use strict';

describe('Service: Servicios', function () {

  // load the service's module
  beforeEach(module('mlliteApp'));

  // instantiate service
  var Servicios;
  beforeEach(inject(function (_Servicios_) {
    Servicios = _Servicios_;
  }));

  it('should do something', function () {
    expect(!!Servicios).toBe(true);
  });

});
