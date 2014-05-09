'use strict';

angular.module('mlliteApp')
  .controller('CargasafiliadoCtrl', ['$scope','$routeParams','$log','BuscaPolizaPorTitular','BuscarGrupoFamiliar','BuscarPlanPrestacionBasicaPorTipoBeneficiario','BuscarPlanPrestacionPorGrupoTipoBeneficiario','BuscarTipoDocumentoPrestacion',function ($scope,$routeParams, $log, BuscaPolizaPorTitular, BuscarGrupoFamiliar, BuscarPlanPrestacionBasicaPorTipoBeneficiario,BuscarPlanPrestacionPorGrupoTipoBeneficiario,BuscarTipoDocumentoPrestacion) {
    
    $scope.prestacionBasica = false;
    $scope.prestacionesListado = false;
    $scope.agregarDocumento = false;
    $scope.error = false;
    $scope.addDocumento =false;
    $scope.botonTerminar = false;
    //*************************************
    $scope.ocultarTabla = false;
    
    
    $scope.poliza = BuscaPolizaPorTitular.get( {rutAsegurado : $routeParams.rutAsegurado, fechaAtencion : $routeParams.fechaAtencion, rutUsuario : $routeParams.rutUsuario},function (response) {$scope.grupoFamiliarList = BuscarGrupoFamiliar.get( {numeroPoliza : $scope.poliza.numeroPoliza, rutAsegurado : $routeParams.rutAsegurado, fechaAtencion : $routeParams.fechaAtencion});});   
    $scope.onBeneficiarioSeleccionado = function (beneficiario) {
        
        $scope.prestacionBasica = true;
        $scope.prestacionesListado = false;
        $scope.beneficiarioSeleccionado = beneficiario;   
        $scope.planPrestacionBasicaList = BuscarPlanPrestacionBasicaPorTipoBeneficiario.get({numeroPoliza: $scope.poliza.numeroPoliza,
                                                                                             numeroGrupo: beneficiario.numeroGrupo, 
                                                                                             numeroAsegurado : beneficiario.numeroAsegurado,
                                                                                             numeroCarga : beneficiario.numeroCarga
                                                                                            });                                                                 
   };
    $scope.onbuscarPrestaciones = function (tipoPrestacion,beneficiarioSeleccionado){
        
        $scope.prestacionBasica = false;
        $scope.prestacionesListado = true;
        $scope.tipoPrestacionSeleccionada = tipoPrestacion; 
        $scope.planPrestacionList = BuscarPlanPrestacionPorGrupoTipoBeneficiario.get({numeroPoliza: $scope.poliza.numeroPoliza,
                                                                                      numeroGrupo: beneficiarioSeleccionado .numeroGrupo, 
                                                                                      numeroAsegurado : beneficiarioSeleccionado .numeroAsegurado,
                                                                                      numeroCarga : beneficiarioSeleccionado .numeroCarga,
                                                                                      prestacionBasica: tipoPrestacion.prestacionBasica
                                                                                    });
    } ; 

    $scope.agregarDocumento= function (){  
        $scope.addDocumento = true; 
    };
   
    
    $scope.tipoDocumentoPrestacion = BuscarTipoDocumentoPrestacion.get();
   
    $scope.listaResumen =[{nombrePrestacion:'',
                          tipoDocumento:'',
                          texto:''
                         }];   
    
    $scope.guardar = function (nombrePres,TipoDocumento,textoDescripcion){ 
                
                $scope.listaResumen.push({nombrePrestacion:nombrePres.nombrePrestacion,
                                            tipoDocumento:TipoDocumento.descripcionTipoDocumento,
                                            texto:textoDescripcion});
                $scope.addDocumento = false;
                $scope.botonTerminar = true;
                $scope.ocultarTabla = true;
    };

  
    $scope.sumar = function (){   
        for(var i = 0; i < $scope.planPrestacionList.length; i++) {
            if(parseInt($scope.planPrestacionList[i].aporteIsapre)){
                if(parseInt($scope.planPrestacionList[i].aporteIsapre) <= parseInt($scope.planPrestacionList[i].totalPrestacion)){
                    $scope.error = false;
                    $scope.planPrestacionList[i].montoReclamado =  parseInt($scope.planPrestacionList[i].totalPrestacion) - parseInt($scope.planPrestacionList[i].aporteIsapre) ;        
                }else{
                    $scope.error = true;
                    $scope.planPrestacionList[i].aporteIsapre =null;
                    $scope.planPrestacionList[i].totalPrestacion=null;            
                }
            }
        }     
    };
    
    $scope.limpiar = function () {
        for(var i = 0; i < $scope.planPrestacionList.length; i++) {
            $scope.planPrestacionList[i].totalPrestacion = null;
            $scope.planPrestacionList[i].aporteIsapre = null;
            $scope.planPrestacionList[i].montoReclamado = null
            $scope.planPrestacionList[i].reembolsoBiceVida = null;
       }
   }; 
   
}]);
