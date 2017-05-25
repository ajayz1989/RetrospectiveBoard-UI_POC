var createUserModuleFactory = angular.module("createUserModuleFactory",['constantsModule']);

createUserModuleFactory.factory('createUserFactory', function($http, ConstantsFactory) {
    return {
        getAllUsers: function(data) {
        	var config = {headers:  {
                'Accept': 'application/json'
            }
        };
            var url = ConstantsFactory.getCreateUserURL();
            return $http.post(url, data, config);
        }
    };
});