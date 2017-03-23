angular.module('photoApp')
    .controller('projectCtrl', ['$scope', 'selectedProjectService', 'projectsFactory', function ($scope, selPrjServ, prjFactory) {


        if (typeof selPrjServ.selectedProject.id === "undefined") {
            console.log("no data", selPrjServ.selectedProject)
            prjFactory.getAllData(function (projectsData) {
                selPrjServ.selectedProject = projectsData[0];
                $scope.project = projectsData[0];
                console.log("data pulled again with filter ", $scope.project);
            })

        } else {
            console.log("data transmitted with service ", selPrjServ.selectedProject, selPrjServ.selectedProject.id)
            $scope.project = selPrjServ.selectedProject;
        }

    }])
