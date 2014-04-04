'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/titular/:rutAsegurado/:fechaAtencion/:rutUsuario', null, {
    'get':   {method:'GET', params:{rutAsegurado: null, fechaAtencion:null, rutUsuario:null}, isArray: false}
  });
});

angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutAsegurado/:fechaAtencion', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, rutAsegurado: null, fechaAtencion:null}, isArray: true}
  });
});

angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, numeroAsegurado: null, numeroCarga: null}, isArray: true}
  });
});


