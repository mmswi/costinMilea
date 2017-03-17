angular.module('photoApp')
    .controller('projectsCtrl', ['$scope', 'projectsFactory', 'selectedProjectService', function ($scope, projectsFactory, selPrjServ) {
        projectsFactory.getAllData(function (projectsData) {
            $scope.projects = projectsData;
        })

        $scope.selectProject = function(prj) {
            for(var i=0;i<$scope.projects.length; i++) {
                if($scope.projects[i].id == prj) {                    selPrjServ.selectedProject=$scope.projects[i];
                }
            }
        }

        $scope.filterProject = function(newProjectFilter) {
            $scope.projectFilter = newProjectFilter;
            console.log($scope.projectFilter)
        }

    }])
