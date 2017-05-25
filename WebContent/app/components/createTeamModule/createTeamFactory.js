var createTeamModuleFactory = angular.module("createTeamModuleFactory",['constantsModule']);

createTeamModuleFactory.factory('createTeamFactory', function($http, ConstantsFactory) {
    return {
        getAllUsers: function(data) {
        	var config = {headers:  {
                'Accept': 'application/json'
            }
        };
            var url = ConstantsFactory.getCreateUserURL();
            return $http.post(url, data, config);
        },
    
    createNewTeam: function(data) {
    	var config = {headers:  {
            'Accept': 'application/json'
        }
    };
        var url = ConstantsFactory.getSaveTeamsURL();
        return $http.post(url, data, config);
    }
    };
});