(function() {
    var app = angular.module("gitPro", []);

    var MainController = function($scope, $http) {

        var onUserComplete = function(res) {
            $scope.user = res.data;
        };

        var onError = function(err) {
            $scope.error = "Could not fetch the user";
        };

        $http.get("http://api.github.com/users/iamSK77")
            .then(onUserComplete, onError);

        $scope.message = "Hello, Angular!";

    };

    app.controller("MainController", ['$scope', '$http', MainController]);

}());