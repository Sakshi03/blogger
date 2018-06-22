angular.module('blogModule', ['ui.router'])
.controller("ParentController", function($scope, blogService){
    $scope.SendData = function () {
        // use $.param jQuery function to serialize data from JSON 
         var data = ({
             email: $scope.emailId,
             password: $scope.password
         });
         $scope.otheresponse={};
         postdata.then(function(response){
             $scope.otheresponse=response.data;
         },function(){})
         
        
         };
    
    const makeCallPromise = blogService.makecall();

    $scope.responseFromApi = {};
    makeCallPromise.then( function(response){
        $scope.responseFromApi = response.data;
    }, function(){})

});