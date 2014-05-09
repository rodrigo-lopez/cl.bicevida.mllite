'use strict';

var RUT_REGEXP = /(^[0-9]{1,8}-[\d|K]$)|(^[0-9]{1,2}[.][0-9]{1,3}[.][0-9]{1,3}-[\d|K])/i;

angular.module('mlliteApp')
  .directive('bvValidarRut', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (RUT_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('bvValidarRut', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('bvValidarRut', false);
            return undefined;
          }
        });
      }
    };
  });
