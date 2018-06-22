angular.module('blogModule')
.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    console.log('router')
    $stateProvider.state({
        name: 'home',
        url:'/home',
        templateUrl: './html/home.html'
    });
}])