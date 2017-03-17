angular.module('photoApp')
    .factory('projectsFactory', ['$http', function ($http) {
        //loading in cache the json, and using it in the controllers
        var cachedData;

        function getData(callback) {
            if (cachedData) {
                callback(cachedData);
            } else {
                $http.get('app/albumsData/dateProiecte.json').success(function (data) {
                    cachedData = data;
                    callback(data);
                });
            }
        }

        return {
            getAllData: getData,
            filterData: function (urlId, callback) {
                getData(function (data) {
                    var projectData = data.filter(function (entry) {
                        return entry.id === urlId;
                    })[0];
                    callback(projectData);
                });
            }
        }

}])
