
var authenticationModuleController=angular.module('authenticationModuleController',['AuthenticationModuleService','AuthenticationModuleFactory']);

authenticationModuleController.controller('authenticationController',function ($scope, $location, AuthenticationFactory) {

    $scope.logOut = function () {
    	AuthenticationFactory.logOut(AuthenticationFactory.authentication.email);
        $location.path('/login');
    };

    $scope.authentication = AuthenticationFactory.authentication;
    
//adding changes
});