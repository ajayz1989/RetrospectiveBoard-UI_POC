var createUserModuleController = angular.module("createUserModuleController",['createUserModuleService','createUserModuleFactory']);


var roleDataSet = {
		"1": "Site Admin",
		"2": "Admin",
		"3": "General User"
};

createUserModuleController.controller("createUserController", function($scope, createUserService, createUserFactory){

	$scope.roleList = roleDataSet;
	
	/**
	 * method invoked when the submit button on the login page is clicked.
	 * calls the getUsers method from LoginService to authenticate the login attempt
	 * made by the user and ten navigate to the respective page.
	 */
	$scope.clicked = function(){
		var data = {
				"first_name": $scope.viewFirstName,
				"last_name": $scope.viewLastName,
				"email": $scope.viewEmailID,
			    "password": $scope.viewPassword,
			    "role_id": $scope.viewRoleID
			} 

		createUserService.getUsers(data);		
	};
});