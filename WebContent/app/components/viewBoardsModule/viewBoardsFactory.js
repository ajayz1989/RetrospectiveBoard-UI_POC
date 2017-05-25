var viewBoardsFactory = angular.module("viewBoardsFactory",['constantsModule']);

viewBoardsFactory.factory('viewBoardsFactory', function($http, $q, ConstantsFactory) {
    return {
    	getBoardsList: function(pageNumber, usersPerPage, sortKey, isAscending) {
        	var config = {headers:  {
                'Accept': 'application/json'
            	}
        	};
        	var data;
			var deferr = $q.defer();
            var url = ConstantsFactory.getViewBoardsURL()+"?currentPage="+pageNumber+"&noOfRecords="+usersPerPage+"&sortParameter="+sortKey+"&isAscending="+isAscending;
            $http.get(url).then(function(response){
            	deferr.resolve(response);
			});
            
            return deferr.promise;
        },
        
        updateBoard: function(data){
    		var config = {headers:  {
                'Accept': 'application/json'
            	}
        	};
    		
    		var url = ConstantsFactory.getSaveBoardsURL()+"/"+data.id;
    		return $http.put(url, data);
            
    	}
    };
});