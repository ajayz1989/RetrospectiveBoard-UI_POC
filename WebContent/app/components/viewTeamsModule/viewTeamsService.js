var viewTeamsService = angular.module("viewTeamsService", ["viewTeamsFactory"]);

viewTeamsService.service("viewTeamsService", function( $q, $state, viewTeamsFactory){
	var me = this;
	
	me.getResultsPage = function (pageNumber, usersPerPage, sortKey, isAscending, responseData){
		var defer = $q.defer();
		
		viewTeamsFactory.getTeamsList(pageNumber, usersPerPage, sortKey, isAscending).then(function (response) {
			defer.resolve(response);
		});
		
		return defer.promise;
	};

	me.updateTeamData = function(updatedData){

		viewTeamsFactory.updateTeam(updatedData).success(function (response, status) {
			me.navigateToSuccessModal(status);
		});
	}
	
	me.deleteTeamData = function(teamId){

		viewTeamsFactory.deleteTeam(teamId).success(function (response, status) {
			me.navigateToSuccessModal(status);
		})
		.error(function (data, status, header, config) {
                var test1 = data;
                var test2 = status;
                var test3 = header;
                var test4 = config;
            });
	}
	
	me.navigateToSuccessModal = function(status){
		if(status == 200)
		{
			$state.go('editTeamModal.editWindowSuccess');			
		}
		else
		{
			$state.go('login');			
		}
	};
});