'use strict';

angular.module('mlliteApp')
  .directive('separadorMiles', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/,/g, '')
                $element.val($filter('number')(value, false))
            }
            
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/,/g, '');
            })
            
            ngModelCtrl.$render = function() {
                $element.val($filter('number')(ngModelCtrl.$viewValue, false))
            }
            
            $element.bind('change', listener)
            $element.bind('keydown', function(event) {
                var key = event.keyCode

                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)) 
                    return 
                $browser.defer(listener)
            })
            
            $element.bind('paste cut', function() {
                $browser.defer(listener)  
            })
        }    
    }
});