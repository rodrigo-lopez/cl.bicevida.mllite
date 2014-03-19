'use strict';

angular.module('mlliteApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.busqueda = {
        "rut": ""
    };
    
    $scope.go = function ( path ) {
        $location.path( path );
    };
  }]);
