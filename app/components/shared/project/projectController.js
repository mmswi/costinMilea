angular.module('photoApp')
    .controller('projectCtrl', ['$scope', 'selectedProjectService', 'projectsFactory', '$stateParams', function ($scope, selPrjServ, prjFactory, $stateParams) {


        if (typeof selPrjServ.selectedProject.id === "undefined") {
            console.log("no data", selPrjServ.selectedProject)
            console.log("prj id", $stateParams.id)
            prjFactory.filterData($stateParams.id, function (projectsData) {
                $scope.project = projectsData;
                console.log("data pulled again with filter ", $scope.project);
            })

        } else {
            console.log("data transmitted with service ", selPrjServ.selectedProject, selPrjServ.selectedProject.id)
            $scope.project = selPrjServ.selectedProject;
        }

    }])
