'use strict';

angular.module('mlliteApp')
  .controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.busqueda = {
        "rut": ""
    };
    
    $scope.go = function ( path ) {
        $location.path( path );
    };
  }]);
