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
    
   $scope.onBeneficiarioSeleccionado = function (beneficiario) {
        $scope.planSeleccionado = {};      
        $scope.beneficiarioSeleccionado = beneficiario;
        $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.consultar({numeroPoliza: $scope.poliza.numeroPoliza,
                                    numeroGrupo: beneficiario.numeroGrupo, 
                                    tipoBeneficiario: beneficiario.relacion}, 
                                    function (data) {
                                        $log.info(data);
                                        $scope.planSeleccionado= data[0].nombrePrestacion;
                                    }
        );
        
   
   }
   
   $scope.limpiar = function () {
       for (var i = 0; i < $scope.reclamoList.length; i++) {
                $scope.reclamoList[i].totalPrestacion = null;
                $scope.reclamoList[i].aporteIsapre = null;
                $scope.reclamoList[i].copago = null
                $scope.reclamoList[i].reembolsoBiceVida =null;
       }
    }
    
    $scope.calcular = function(){  
        $scope.totalReembolsoBiceVida=0;
        
        for (var i = 0; i < $scope.reclamoList.length; i++) {
            $scope.reclamoList[i].reembolsoBiceVida = Math.round(($scope.reclamoList[i].totalPrestacion - $scope.reclamoList[i].aporteIsapre) * 0.8);
            $scope.totalReembolsoBiceVida += $scope.reclamoList[i].reembolsoBiceVida;
        }
    }
    
  });