'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', function ($scope,$log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, $routeParams) {
   //$scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut});
   
   $scope.polizaCallback = function (response) {
       $scope.grupoFamiliarList = BuscarGrupoFamiliar.consultar({numeroPoliza: $scope.poliza.numeroPoliza, rutTitular: $routeParams.rut});   
   }   
   $scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut}, $scope.polizaCallback);
   
   
   $scope.prestacionesList = function() {
      $scope.poliza.coberturaList.push({"codigo": 1,"nombre": "Consultas Medicas","total" : null, "aporteIsapre" : null, "aporteBiceVida" : null});
   }
  });