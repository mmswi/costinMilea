angular.module('photoApp', ['ui.router', 'angularUtils.directives.dirPagination', 'angular-cookie-law'])
    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /acasa
        $urlRouterProvider.otherwise("/acasa");
        //
        // Now set up the states
        $stateProvider
            .state('acasa', {
                url: "/acasa",
                templateUrl: "app/components/home/acasa.html"
            })
            .state('despre', {
                url: "/despre",
                templateUrl: "app/components/about/despre.html"
            })
            // .state('proiecte', {
            //     url: "/proiecte",
            //     templateUrl: "app/components/projects/proiecte.html",
            //     controller: 'projectsCtrl'
            // })
            .state('portofoliu', {
                url: "/portofoliu",
                templateUrl: "app/components/shared/project/pagina-proiect.html",
                controller: 'projectCtrl'
            })
            .state('contact', {
                url: "/contact",
                templateUrl: "app/components/contact/contact.html"
            })
            .state('cookiePolicy', {
                url: "/cookiePolicy",
                templateUrl: "app/components/cookiePolicy/cookiePolicy.html"
            })
    })
