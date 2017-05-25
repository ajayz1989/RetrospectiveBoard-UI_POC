var loginModuleFactory = angular.module("loginModuleFactory",['constantsModule']);

	
loginModuleFactory.factory('loginFactory', function($http, ConstantsFactory) {
		
    return {
        getAllUsers: function(data) {
     	   var config = {headers:  { 'Accept': 'application/json'}  };
            var url = ConstantsFactory.getLoginURL();
            
            return $http.post(url, data, config);
        },
       
       login:function(data){
    	   var config = {headers:  { 'Accept': 'application/json'}  };
           var url = ConstantsFactory.getLoginURL();  	   
		
           return $http.post(url,data,config);       
        
       }
    
    };
    
});