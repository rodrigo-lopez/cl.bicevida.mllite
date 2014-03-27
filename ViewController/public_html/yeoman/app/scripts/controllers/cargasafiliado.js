'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', function ($scope,$routeParams, $log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, BuscarPlanPrestacionPorGrupoTipoBeneficiario) {
   //$scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut});
   
   
   $scope.polizaCallback = function (response) {
       $scope.grupoFamiliarList = BuscarGrupoFamiliar.consultar({numeroPoliza: $scope.poliza.numeroPoliza, rutTitular: $routeParams.rut});   
      $log.info($scope.grupoFamiliarList);
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
   $scope.reclamoList = [
   {
        reembolsoBiceVida:null,
        totalPrestacion:null,
        aporteIsapre:null
   }
   ];
   $scope.calcular = function(){  
        $scope.totalReembolsoBiceVida=0;
        
        for (var i = 0; i < $scope.reclamoList.length; i++) {
            $scope.reclamoList[i].reembolsoBiceVida = Math.round(($scope.reclamoList[i].totalPrestacion - $scope.reclamoList[i].aporteIsapre) * 0.8);
            $scope.totalReembolsoBiceVida += $scope.reclamoList[i].reembolsoBiceVida;
        }
    }
        
    
    $scope.agregarReclamo = function (prestacion) {
        $scope.reclamoList.push(
            {
                planPrestacion: prestacion,
                totalAtencion: null,
                montoIsapre: null,
                totalCalculado: null,
                estado: null,
                mensaje: null
            }
        );
    }
    
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.
