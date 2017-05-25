var authenticationInterceptorFactory=angular.module('authenticationInterceptorFactory',['ngStorage']);

authenticationInterceptorFactory.factory('authInterceptor',function($rootScope,$q,$window,$localStorage,$location){
	return{
		request:function(config){
			config.headers=config.headers||{};
			var authData = JSON.parse(localStorage.getItem('ls.org.rb')) || [];
    		var sessionid = authData.token ;
    		console.log(sessionid+"- userid");
			if(sessionid){ //$localStorage.token
				console.log(sessionid +"-token");
				config.headers.Authorization='Key :'+authData.userid;
				config.headers.loggeduserid= authData.userid;
			}
			return config;
		},
		
		response:function(response){
			if(response.status==401  || response.status == 403){
				  // handle the case where the user is not authenticated
				$scope.message="User not Authorized";
				console.log($scope.message);
				//$location.path('/login');
				window.location='#/login';
			}
			return response||$q.when(response);
		}
		
	};
	
});

