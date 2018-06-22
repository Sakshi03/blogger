angular.module('blogModule')
.service('blogService', function($http){

    this.makecall = function(){
        return $http.get('http://localhost:3000/hi');
    }

});