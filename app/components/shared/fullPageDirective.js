angular.module('photoApp')
    .directive('fullPageDirective', function () {
        var fPFunk = function (scope, element, attrs) {
                $('#fullpage').fullpage();
            scope.$on("$destroy", function () {
                $.fn.fullpage.destroy('all');
            });
        }
        return {
            restrict: 'A',
            link: fPFunk
        }
    })
