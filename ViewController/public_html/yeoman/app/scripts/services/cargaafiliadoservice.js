'use strict';

angular.module('mlliteApp').factory('Cargaafiliadoservice', function ($resource, $log) {
  return $resource('/data/cargas.json', null, {
   // 'get':    {method:'GET'},
   //
    'consultar':   {method:'GET'}
    //consultar: {method:'GET', params:{}, isArray: true}
  });
});