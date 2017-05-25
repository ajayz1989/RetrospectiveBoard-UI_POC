var signUpModuleFactory = angular.module("signUpModuleFactory",['constantsModule']);

	
signUpModuleFactory.factory('signUpFactory', function($http, ConstantsFactory) {
		
    return {
        signup:function(data){
    	   var config = {headers:  { 'Accept': 'application/json'}  };
           var url = ConstantsFactory.getSignUpURL();  	   
		
           return $http.post(url,data,config);       
        
       }
    
    };
    
});