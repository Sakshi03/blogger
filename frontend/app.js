angular.module('blogModule', ['ui.router'])
.controller("ParentController", function($scope, blogService){
    $scope.SendData = function () {
        // use $.param jQuery function to serialize data from JSON 
         var data = $.param({
             email: $scope.emailId,
             password: $scope.password
         });
         $http.post('/home',data)
         .success(function(data,status){
             $scope.PostDataResponse=data;
         })
         error(function(data,status){
             $scope.ResponseDetails ="Data : " + data; });
         };
    
    const makeCallPromise = blogService.makecall();

    $scope.responseFromApi = {};
    makeCallPromise.then( function(response){
        $scope.responseFromApi = response.data;
    }, function(){})

});