angular.module('photoApp')
    .directive('swipeBoxDirective', function () {
        var swipeFunk = function (scope, element, attrs) {
            if (scope.$last) {
                $('.swipebox').swipebox();
            }
        }
        return {
            restrict: 'A',
            link: swipeFunk
        }
    })
