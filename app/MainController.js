(function() {
    let app = angular.module("gitPro", []);

    let MainController = function($scope, $http, $anchorScroll, $location) {

        let onUserComplete = function(res) {
            $scope.user = res.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError)
        };

        let onRepos = function(res) {
            $scope.repos = res.data;
            $location.hash("userDetails");
            $anchorScroll();
        }

        let onError = function(err) {
            $scope.error = "Could not fetch the user";
        };

        let descendCountdown = function() {
            $scope.countdown -= 1;
            if($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        $scope.search = function(username) {
            $http.get("http://api.github.com/users/" + username)
            .then(onUserComplete, onError);
        };

        $scope.message = "Hello, Angular!";
        $scope.repoOrder = "-stargazers_count";
        $scope.countdown = 5;

    };

    app.controller("MainController", ['$scope', '$http', '$anchorScroll', '$location', MainController]);

}());