'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/titular/:rutTitular/:fechaAtencion', null, {
    'consultar':   {method:'GET', params:{rutTitular: null,fechaAtencion:null}, isArray: false}
  });
});



angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutTitular/:fechaAtencion', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, rutTitular: null, fechaAtencion:null}, isArray: true}
  });
});


angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:tipoBeneficiario', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, tipoBeneficiario: null}, isArray: true}
  });
});

//angular.module('mlliteApp').factory('GuardarReembolsoPorGrupoTipoBeneficiario', function ($resource, $log) {
 // return $resource('http://localhost:7101/ServiciosColectivos/jersey/polizas/', null, {
  //  'save':   {method:'POST', headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
 // });
//});

