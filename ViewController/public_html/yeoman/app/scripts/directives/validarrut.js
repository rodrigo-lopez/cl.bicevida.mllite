'use strict';

var RUT_REGEXP = /(^[0-9]{1,8}-[\d|K]$)|(^[0-9]{1,2}[.][0-9]{1,3}[.][0-9]{1,3}-[\d|K])|(^[0-9]{1,8}[\d|K]$)/i;

angular.module('mlliteApp')
  .directive('validarRut', function () {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (RUT_REGEXP.test(viewValue)) {
            // it is valid
            ctrl.$setValidity('validarRut', true);
            return viewValue;
          } else {
            // it is invalid, return undefined (no model update)
            ctrl.$setValidity('validarRut', false);
            return undefined;
          }
        });
      }
    };
  });
