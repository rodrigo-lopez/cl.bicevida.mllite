'use strict';

angular.module('mlliteApp').factory('BuscaPolizaPorTitular', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/sec/sc/ServiciosColectivos/jersey/polizas/titular/:rutAsegurado/:fechaAtencion/:rutUsuario', null, {
  //return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/titular/:rutAsegurado/:fechaAtencion/:rutUsuario', null, {
    'get':   {method:'GET', params:{rutAsegurado: null, fechaAtencion:null, rutUsuario:null}, isArray: false}
  });
});

angular.module('mlliteApp').factory('BuscarGrupoFamiliar', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/sec/sc/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutAsegurado/:fechaAtencion', null, {
  //return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/grupofamiliar/:numeroPoliza/:rutAsegurado/:fechaAtencion', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, rutAsegurado: null, fechaAtencion:null}, isArray: true}
  });
});

angular.module('mlliteApp').factory('BuscarPlanPrestacionBasicaPorTipoBeneficiario', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/sec/sc/ServiciosColectivos/jersey/polizas/planprestacionbasica/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga', null, {
  //return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/planprestacionbasica/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, numeroAsegurado: null, numeroCarga: null}, isArray: true}
  });
});


angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/sec/sc/servicioscolectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga/:prestacionBasica', null, {
  //return $resource('/sec/sc/servicioscolectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga/:prestacionBasica', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, numeroAsegurado: null, numeroCarga: null, prestacionBasica: null}, isArray: true}
  });
});

angular.module('mlliteApp').factory('BuscarTipoDocumentoPrestacion', function ($resource, $log) {
  return $resource('http://127.0.0.1:7101/sec/sc/ServiciosColectivos/jersey/polizas/tipoDocumentoPrestacion', null, {
  //return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/tipoDocumentoPrestacion', null, {
    'get':   {method:'GET', isArray:true}
  });
});

angular.module('mlliteApp').factory('BuscarPlanPrestacionPorGrupoTipoBeneficiario', function ($resource, $log) {
    return $resource('http://127.0.0.1:7101/sec/sc/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga/:prestacionBasica', null, {
  //return $resource('/sec/sc/ServiciosColectivos/jersey/polizas/planprestacion/:numeroPoliza/:numeroGrupo/:numeroAsegurado/:numeroCarga/:prestacionBasica', null, {
    'get':   {method:'GET', params:{numeroPoliza: null, numeroGrupo: null, numeroAsegurado: null, numeroCarga: null, prestacionBasica: null}, isArray: true}
  });
});

