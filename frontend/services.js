angular.module('blogModule')
.service('blogService', function($http){

    this.makecall = function(){
        return $http.get('http://localhost:3000/hi');
    },
    this.postdata=function(){
        return $http.post('http://localhost:3000/home');
    }
});