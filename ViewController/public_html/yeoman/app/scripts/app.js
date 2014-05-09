'use strict';

angular.module('mlliteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
]).config(function ($httpProvider) {
  $httpProvider.defaults.transformRequest = function (data) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    if (data === undefined) {
      return data;
    }
    return $.param(data);
  }
}).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/prestaciones/:rutAsegurado/:fechaAtencion/:rutUsuario', {
        templateUrl: 'views/prestaciones.html',
        controller:'CargasafiliadoCtrl'
      })
      .when('/tipoprestacion/:prestacionBasica/:numeroGrupo/:numeroAsegurado/:numeroCarga/:numeroPoliza', {
        templateUrl: 'views/tipoprestacion.html',
        controller:'TipoprestacionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
