var loginModuleController = angular.module("loginModuleController",['loginModuleService','loginModuleFactory']);

loginModuleController.controller("loginController", function($scope, loginService, loginFactory){
	
	/**
	 * method invoked when the submit button on the login page is clicked.
	 * calls the getUsers method from LoginService to authenticate the login attempt
	 * made by the user and ten navigate to the respective page.
	 */
	$scope.clicked = function(){
		var data = {
			    "email": $scope.enteredUserName,
			    "password": $scope.enteredPassword
			}; 

		loginService.getUsers(data);		
	};
	
	$scope.login = function(){
		var data = {
			    "email": $scope.enteredUserName,
			    "password": $scope.enteredPassword
			}; 

		loginService.login(data);		
	};
});