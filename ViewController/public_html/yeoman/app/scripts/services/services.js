'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/titular/:rutTitular', null, {
    'consultar':   {method:'GET', params:{rutTitular: null}, isArray: false}
  });
});



angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutTitular', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, rutTitular: null}, isArray: true}
  });
});


angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:tipoBeneficiario', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, tipoBeneficiario: null}, isArray: true}
  });
});


