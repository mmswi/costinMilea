angular.module('photoApp')
    .directive('menuToggle', function () {
        var toggleFunk = function (scope, element, attrs) {
            $('#menu-toggle').click(function (event) {
                event.stopPropagation();
                $('.navigation-styles').animate({
                    right: "0rem"
                }, 200);
            })

            $('html').click(function (element) {
                //                element.preventDefault();
                $('.navigation-styles').animate({
                    right: "-25rem"
                }, "slow");

            })

            if ($(window).width() < 768) {
                $('.projects-filter').click(function () {
                    $('.projects-filter').toggleClass('clicked-class-btn');
                    if ($('.projects-filter').hasClass('clicked-class-btn')) {
                        $('.projects-list').slideDown("fast");
                    } else {
                        $('.projects-list').slideUp("slow");
                    }
                });
            }
        }
        return {
            restrict: 'A',
            link: toggleFunk
        }
    })

.directive('listToggle', function () {
    var toggleFunk = function (scope, element, attrs) {

        if ($(window).width() < 768) {
            $('.projects-filter').click(function (event) {

                $('.projects-filter').toggleClass('clicked-class-btn');
                if ($('.projects-filter').hasClass('clicked-class-btn')) {
                    $('.projects-list').slideDown("fast");
                } else {
                    $('.projects-list').slideUp("slow");
                }
                event.stopPropagation();
            });

            $('html').click(function () {
                $('.projects-list').slideUp("slow");
                $('.projects-filter').removeClass('clicked-class-btn');
            })
        }
    }
    return {
        restrict: 'A',
        link: toggleFunk
    }
})
