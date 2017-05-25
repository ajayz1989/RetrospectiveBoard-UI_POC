var signUpModuleController = angular.module("signUpModuleController",['signUpModuleService','signUpModuleFactory']);

signUpModuleController.controller("signUpController", function($scope, signUpService, signUpFactory){
	
	/**
	 * method invoked when the submit button on the SignUp page is clicked.
	 * calls the getUsers method from signUpService to authenticate the signUp attempt
	 * made by the user and ten navigate to the respective page.
	 */
	$scope.clicked = function(){
		var data = {
			    "email": $scope.enteredUserName,
			    "password": $scope.enteredPassword
			}; 

		signUpService.getUsers(data);		
	};
	
	$scope.signup = function(){
		var data = {
			    "email": $scope.enteredEmail,
			    "password" :$scope.enteredPassword,
			    "first_name": $scope.enteredFirstName,
			    "last_name" : $scope.enteredLastName
			}; 

		signUpService.signup(data);		
	};
});