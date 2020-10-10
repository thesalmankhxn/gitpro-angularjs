(function(){
    let github = function($http){

        let getUser = function(username) {
           return $http.get("http://api.github.com/users/" + username)
                        .then(function(res){
                            return res.data;
                        });
        };
        
        return {

        };
    };

    let module = angular.module("gitPro");
}());