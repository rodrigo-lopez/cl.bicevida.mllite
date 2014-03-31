'use strict';

angular.module('mlliteApp')
  .controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.busqueda = {
        rutAsegurado: "",
        fechaAtencion:"",
        rutUsuario:"11610087-8"
    };
  }]);
