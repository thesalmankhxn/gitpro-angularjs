(function(){
    let github = function($http){

        let getUser = function(username) {
           return $http.get("http://api.github.com/users/" + username)
                        .then(function(res){
                            return res.data;
                        });
        };

        let getRepos = function(user) {
            return $http.get(user.repos_url)
                        .then(function(res) {
                            return res.data;
                        });
        };        
        
        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    let module = angular.module("gitPro");
    module.factory("github", github);
}());