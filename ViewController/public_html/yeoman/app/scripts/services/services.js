'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('http://localhost:7101/ServiciosColectivos/jersey/polizas/titular/:rutTitular', null, {
    'consultar':   {method:'GET', params:{rutTitular: null}, isArray: false}
  });
});



angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('http://localhost:7101/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutTitular', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, rutTitular: null}, isArray: true}
  });
});