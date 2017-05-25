var createBoardModuleFactory = angular.module("createBoardModuleFactory",['constantsModule',"ngStorage"]);

createBoardModuleFactory.factory('createBoardFactory', function($http, ConstantsFactory,$window,$localStorage) {
    return {
    	saveNewBoard: function(data) {
    		var authData = JSON.parse(localStorage.getItem('ls.org.rb')) || [];
    		var loggeduserid = authData.userid ;
    	
        	var config = {headers:  {
                'Accept': 'application/json'
            }
        };
            var url = ConstantsFactory.getCreateBoardURL();
            return $http.post(url, data, config);
        }
    };
});