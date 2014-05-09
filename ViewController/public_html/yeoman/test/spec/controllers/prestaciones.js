var liquidadorService = angular.module('prestacionesService', ['ngResource']);

prestacionesService.factory('prestacionesService', ['$resource',
  function($resource){
    return $resource('jersey/polizas/176903', {}, {
      consultar: {method:'GET', params:{}, isArray: false}
    });
}]);


var liquidadorApp = angular.module('liquidadorApp', ['prestacionesService']);


liquidadorApp.controller('PrestacionesCtrl', function ($scope, PolizaService) {
  $scope.poliza = PolizaService.consultar();
  

});