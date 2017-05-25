var createUserModuleService = angular.module("createUserModuleService",['createUserModuleFactory']);

createUserModuleService.service('createUserService', function(createUserFactory){
	var me = this;
	
	/**
	 * method to fetch the users list from the URL.
	 * the getAllUsers method from the loginFactory is called, which hits the URL and 
	 * then the data is fetched on a successful hit. This data is then passed to the 
	 * navigateAfterLogin method, which navigates to a page based on the validation 
	 */
	me.getUsers = function(dataSet){
		createUserFactory.getAllUsers(dataSet).success(function (response, status) {
			//alert(response);
			alert(status);
			this.data = response.Status;
			
			me.navigateAfterLogin(dataSet, status);
		})
		.error(function(response, status){
			alert("failure"+status);
		})
	}
	
	/**
	 * method to navigate to the next page based on the authentication done in the 
	 * getUsers method present above
	 */
	me.navigateAfterLogin = function(userName, testData){
		if(testData == 204)
		{
			window.location = "#/createBoard";			
		}
		else
		{
			window.location = "#/login";			
		}
	}
});