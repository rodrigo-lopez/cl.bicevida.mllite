'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/titular/:rutAsegurado/:fechaAtencion/:rutUsuario', null, {
    'consultar':   {method:'GET', params:{rutAsegurado: null, fechaAtencion:null, rutUsuario:null}, isArray: false}
  });
});

angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutAsegurado/:fechaAtencion', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, rutAsegurado: null, fechaAtencion:null}, isArray: true}
  });
});

angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
  return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga', null, {
    'consultar':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, numeroAsegurado: null, numeroCarga: null}, isArray: true}
  });
});


