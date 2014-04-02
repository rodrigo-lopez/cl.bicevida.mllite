'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', function ($scope,$routeParams, $log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, BuscarPlanPrestacionPorGrupoTipoBeneficiario) {
   //$scope.poliza = BuscaPolizaPorTitular.consultar({rutTitular: $routeParams.rut});
   


   $scope.poliza = BuscaPolizaPorTitular.consultar({rutAsegurado: $routeParams.rutAsegurado,fechaAtencion: $routeParams.fechaAtencion,rutUsuario: $routeParams.rutUsuario}, 
                                                    function (response) {
                                                        $scope.grupoFamiliarList = BuscarGrupoFamiliar.consultar({numeroPoliza: $scope.poliza.numeroPoliza, rutAsegurado: $routeParams.rutAsegurado,fechaAtencion: $routeParams.fechaAtencion});

   });
   
   $scope.onBeneficiarioSeleccionado = function (beneficiario) {
        $scope.planSeleccionado = {};      
        $scope.beneficiarioSeleccionado = beneficiario;
        $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.consultar(
                                    {numeroPoliza: $scope.poliza.numeroPoliza,
                                     numeroGrupo: beneficiario.numeroGrupo, 
                                     numeroAsegurado : beneficiario.numeroAsegurado,
                                     numeroCarga : beneficiario.numeroCarga
                                    }
        
        );
        $log.info($scope.planPrestacionList);
   }
   
   $scope.limpiar = function () {
       for (var i = 0; i < $scope.planPrestacionList.length; i++) {
                $scope.planPrestacionList[i].totalPrestacion = null;
                $scope.planPrestacionList[i].aporteIsapre = null;
                $scope.planPrestacionList[i].montoReclamado = null
                $scope.planPrestacionList[i].reembolsoBiceVida =null;
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
        for (var i = 0; i < $scope.planPrestacionList.length; i++) {
            $scope.planPrestacionList[i].montoReclamado = $scope.planPrestacionList[i].totalPrestacion - $scope.planPrestacionList[i].aporteIsapre;
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
