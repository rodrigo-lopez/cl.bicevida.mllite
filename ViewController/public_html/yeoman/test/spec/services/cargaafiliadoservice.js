'use strict';

describe('Service: Cargaafiliadoservice', function () {

  // load the service's module
  beforeEach(module('mlliteApp'));

  // instantiate service
  var Cargaafiliadoservice;
  beforeEach(inject(function (_Cargaafiliadoservice_) {
    Cargaafiliadoservice = _Cargaafiliadoservice_;
  }));

  it('should do something', function () {
    expect(!!Cargaafiliadoservice).toBe(true);
  });

});
