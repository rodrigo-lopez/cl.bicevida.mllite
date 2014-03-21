'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', function ($scope, $routeParams, $log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, BuscarPlanPrestacionPorGrupoTipoBeneficiario) {
   //$scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut});
   $scope.reclamoList = [
    {
       codigoPlan: null,
       codigoPrestacion: null,
       nombrePrestacion: null,
       totalPrestacion: null,
       aporteIsapre: null,
       copago: null,
       reembolsoBiceVida: null
    }
  ];
   
   $scope.polizaCallback = function (response) {
       $scope.grupoFamiliarList = BuscarGrupoFamiliar.consultar({numeroPoliza: $scope.poliza.numeroPoliza, rutTitular: $routeParams.rut});   
   }   
   $scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut}, $scope.polizaCallback);
   
   
   $scope.prestacionesList = function() {
      $scope.poliza.coberturaList.push({"codigo": 1,"nombre": "Consultas Medicas","total" : null, "aporteIsapre" : null, "aporteBiceVida" : null});
   }
   
   $scope.onBeneficiarioSeleccionado = function (beneficiario) {
        $scope.beneficiarioSeleccionado = beneficiario;
        $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.consultar({numeroPoliza: $scope.poliza.numeroPoliza, numeroGrupo: beneficiario.numeroGrupo, tipoBeneficiario: beneficiario.relacion});
   }
   
  });