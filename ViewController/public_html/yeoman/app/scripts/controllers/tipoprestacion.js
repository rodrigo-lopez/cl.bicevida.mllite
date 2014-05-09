'use strict';

angular.module('mlliteApp')
  .controller('TipoprestacionCtrl',['$scope','$log','$routeParams','BuscarPlanPrestacionPorGrupoTipoBeneficiario','BuscarTipoDocumentoPrestacion', function ($scope,$log,$routeParams,BuscarPlanPrestacionPorGrupoTipoBeneficiario,BuscarTipoDocumentoPrestacion) {
   
    $scope.prestacionBasica = $routeParams.prestacionBasica;
    $scope.agregar = false;

    $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.get(
                                    {numeroPoliza:$routeParams.numeroPoliza,
                                     numeroGrupo: $routeParams.numeroGrupo, 
                                     numeroAsegurado : $routeParams.numeroAsegurado,
                                     numeroCarga : $routeParams.numeroCarga ,
                                     prestacionBasica: $routeParams.prestacionBasica
                                    }
                                    );
    
    $scope.tipoDocumentoPrestacion = BuscarTipoDocumentoPrestacion.get();
    $log.info($scope.tipoDocumentoPrestacion);
    
    $scope.agregar = function() {
       $scope.tipoDocumentoPrestacion.push({descripcionTipoDocumento: $scope.tipoDocumentoPrestacion.descripcionTipoDocumento});
       $scope.descripcionTipoDocumento = '';
    };
   
  }]);
