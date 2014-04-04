'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', ['$scope','$routeParams','$log','BuscaPolizaPorTitular','BuscarGrupoFamiliar','BuscarPlanPrestacionPorGrupoTipoBeneficiario',function ($scope,$routeParams, $log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, BuscarPlanPrestacionPorGrupoTipoBeneficiario) {
    

   $scope.poliza = BuscaPolizaPorTitular.get({rutAsegurado: $routeParams.rutAsegurado,
                                                    fechaAtencion: $routeParams.fechaAtencion,
                                                    rutUsuario: $routeParams.rutUsuario}, 
                                                    function (response) {
                                                        $scope.grupoFamiliarList = BuscarGrupoFamiliar.get({numeroPoliza: $scope.poliza.numeroPoliza, 
                                                                                                                  rutAsegurado: $routeParams.rutAsegurado,
                                                                                                                  fechaAtencion: $routeParams.fechaAtencion});
                                                    }
                                                   );
  
   $scope.onBeneficiarioSeleccionado = function (beneficiario) {
        $scope.planSeleccionado = {};      
        $scope.beneficiarioSeleccionado = beneficiario;
      
        $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.get(
                                    {numeroPoliza: $scope.poliza.numeroPoliza,
                                     numeroGrupo: beneficiario.numeroGrupo, 
                                     numeroAsegurado : beneficiario.numeroAsegurado,
                                     numeroCarga : beneficiario.numeroCarga
                                    });
    
      $log.info($scope.reclamoList);
   };
   
   $scope.limpiar = function () {
       for (var i = 0; i < $scope.planPrestacionList.length; i++) {
                $scope.planPrestacionList[i].totalPrestacion = null;
                $scope.planPrestacionList[i].aporteIsapre = null;
                $scope.planPrestacionList[i].montoReclamado = null
                $scope.planPrestacionList[i].reembolsoBiceVida =null;
       }
   };

  $scope.sumar = function (){  
        
        for (var i = 0; i < $scope.planPrestacionList.length; i++) {
           //s alert($scope.planPrestacionList[i].totalPrestacion );
            if ( $scope.planPrestacionList[i].aporteIsapre < $scope.planPrestacionList[i].totalPrestacion){
                 // alert("entro"+i);
                 $scope.planPrestacionList[i].montoReclamado = ($scope.planPrestacionList[i].totalPrestacion - $scope.planPrestacionList[i].aporteIsapre);
            }
        }
  };
   
}]);
