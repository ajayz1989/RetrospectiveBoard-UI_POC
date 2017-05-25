var AuthenticationModuleFactory=angular.module('AuthenticationModuleFactory',['LocalStorageModule','constantsModule']);

AuthenticationModuleFactory.factory('AuthenticationFactory',function($http,ConstantsFactory,$q,localStorageService,$location){
	var authenticationFactory={};

	
	var _authentication={
			isAuth:false,
			username:''
	};
	
	 var _register=function(registerData){
		 
		 _logOut();
		 return $http.post(ConstantsFactory.BASE+'/register',registerData).
		 	then(function(response){
		 		return response;
		 	});
	 };
	 var _fillAuthData = function () {
		 
	        var authData = localStorageService.get('org.rb');
	        if (authData)
	        {
	            _authentication.isAuth = true;
	            _authentication.firstname = authData.userid;
	            console.log(authData.userid);
	            console.log(authData.token);
	            window.location = "#/viewBoards";	
	        }else{
	        	window.location = "#/login";	
	        }
	 
	    };
	 
	 
	
	var _login=function(user){
		
		var deferred = $q.defer();
		
		$http.post(ConstantsFactory.BASE+'/login',user)
		.success(function(response,status){
			localStorageService.set('authorizationData', { token: status, username: user.email }); //access_token
			_authentication.isAuth=true;
			_authentication.username=user.email;
			
			deferred.resolve(response);
			
		})
		.error(function(err,status){
			_logOut();
			deferred.reject(err);
		});
		
		return deferred.promise;
	};
	

	 var _logOut = function (email) {
		 
		 var deferred = $q.defer();
		 
		 $http.get(ConstantsFactory.getLogoutURL()) //logout +post
		 	.success(function(response,status,data,config){
		 		
		 		localStorageService.remove('org.rb');
		 		 
		        _authentication.isAuth = false;
		        _authentication.username = "";
			
			deferred.resolve(data);
			
		 	})
		 	.error(function(err,status){
			    deferred.reject(err);
		});  
	 
		 return deferred.promise;
	  };
	    
	authenticationFactory.register = _register;
	authenticationFactory.login = _login;
	authenticationFactory.logOut = _logOut;
	authenticationFactory.fillAuthData = _fillAuthData;
	authenticationFactory.authentication = _authentication;
	
	return authenticationFactory;
});