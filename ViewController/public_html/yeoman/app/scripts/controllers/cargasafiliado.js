'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', function ($scope,$log, Cargaafiliadoservice) {
   $scope.poliza = Cargaafiliadoservice.consultar();
   $scope.prestacionesList = function() {
      $scope.poliza.coberturaList.push({"codigo": 1,"nombre": "Consultas Medicas","total" : null, "aporteIsapre" : null, "aporteBiceVida" : null});
   }
  });