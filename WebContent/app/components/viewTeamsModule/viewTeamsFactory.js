var viewTeamsFactory = angular.module("viewTeamsFactory",['constantsModule']);

viewTeamsFactory.factory('viewTeamsFactory', function($http, $q, ConstantsFactory) {
    return {
    	getTeamsList: function(pageNumber, usersPerPage, sortKey, isAscending) {
        	var config = {headers:  {
                'Accept': 'application/json'
            	}
        	};
			var deferr = $q.defer();
            var url = ConstantsFactory.getViewTeamsURL()+"?currentPage="+pageNumber+"&noOfRecords="+usersPerPage+"&sortParameter="+sortKey+"&isAscending="+isAscending;
            $http.get(url).then(function(response){
            	deferr.resolve(response);
			});
            
            return deferr.promise;
        },
    
    	updateTeam: function(data){
    		var config = {headers:  {
                'Accept': 'application/json'
            	}
        	};
    		
    		var url = ConstantsFactory.getSaveTeamsURL()+"/"+data.id;
    		return $http.put(url, data);
            
    	},
    	
    	deleteTeam: function(teamId){
    		var config = {headers:  {
                'Accept': 'application/json',
                'loggeduserid' : 2
            	}
        	};
    		
    		var url = ConstantsFactory.getViewTeamsURL()+"/"+teamId;
    		return $http.delete(url);
            
    	}
    };
});