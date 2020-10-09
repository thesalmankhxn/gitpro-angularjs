(function() {
    let app = angular.module("gitPro", []);

    let MainController = function($scope, $http) {

        let onUserComplete = function(res) {
            $scope.user = res.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError)
        };

        let onRepos = function(res) {
            $scope.repos = res.data;
        }

        let onError = function(err) {
            $scope.error = "Could not fetch the user";
        };

        $scope.search = function(username) {
            $http.get("http://api.github.com/users/" + username)
            .then(onUserComplete, onError);
        };

        $scope.message = "Hello, Angular!";
        $scope.repoOrder = "-stargazers_count";

    };

    app.controller("MainController", ['$scope', '$http', MainController]);

}());