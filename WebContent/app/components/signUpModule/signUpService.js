var signUpModuleService = angular.module("signUpModuleService",['signUpModuleFactory','AuthenticationModuleFactory']);

signUpModuleService.service('signUpService', function(signUpFactory,localStorageService,AuthenticationFactory){
	var me = this;
	/**
	 * method to save the details of newly created user.
	 */
	me.signup=function(data){
		signUpFactory.signup(data)
		.success(function(data, status){
			console.log(status);
			me.navigateAfterSignUp(data,status);
			
		  })
		 .error(function(data, status){
			console.log(status);
			me.navigateAfterSignUp(data,status);	
		 });
		
	};
		
	/**
	 * method to navigate to the next page based on the authentication done in the 
	 * getUsers method present above.
	 */
	me.navigateAfterSignUp = function(data, status){
		if(status == 200 || status == 201 )
		{
			window.location = "#/login";			
		}
		else
		{
			console.log("Unable to SignUp..Try Again "+status);			
		}
	};
});