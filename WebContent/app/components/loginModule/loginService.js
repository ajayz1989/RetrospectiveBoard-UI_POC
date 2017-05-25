var loginModuleService = angular.module("loginModuleService",['loginModuleFactory','AuthenticationModuleFactory']);

loginModuleService.service('loginService', function(loginFactory,localStorageService,AuthenticationFactory){
	var me = this;
	
	/**
	 * method to fetch the users list from the URL.
	 * the getAllUsers method from the loginFactory is called, which hits the URL and 
	 * then the data is fetched on a successful hit. This data is then passed to the 
	 * navigateAfterLogin method, which navigates to a page based on the validation 
	 */
	me.getUsers = function(dataSet){
		loginFactory.getAllUsers(dataSet).success(function (response, status) {
			this.data = response.Status;			
			me.navigateAfterLogin(dataSet, status);
		})
		.error(function(response, status){
			alert("failure"+status);
			me.navigateAfterLogin(dataSet, status);
		});
	};

	
	me.login=function(dataSet){
	   loginFactory.login(dataSet)
		.success(function(data, status){
			localStorageService.set('org.rb', { token: status, email: data.email, firstname: data.first_name, userid:data.id , lastname: data.last_name }); //setting token
			AuthenticationFactory.authentication.isAuth=true;
			AuthenticationFactory.authentication.username=dataSet.email;
			console.log(status);
			me.navigateAfterLogin(data,status);
			
		  })
		 .error(function(data, status){
			//_logOut();
			console.log(status);
			me.navigateAfterLogin(dataSet,status);	
		 });
		
	};
		
	/**
	 * method to navigate to the next page based on the authentication done in the 
	 * getUsers method present above.
	 */
	me.navigateAfterLogin = function(userName, testData){
		if(testData == 200)
		{
			window.location = "#/viewBoards";			
		}
		else
		{
			window.location = "#/login";			
		}
	};
});