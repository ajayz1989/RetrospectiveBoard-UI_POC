var viewBoardsService = angular.module("viewBoardsService", ["viewBoardsFactory"]);

viewBoardsService.service("viewBoardsService", function( $q, viewBoardsFactory){
	var me=this;
	
	me.getResultsPage = function (pageNumber, usersPerPage, sortKey, isAscending, responseData){
		var defer = $q.defer();
		
		viewBoardsFactory.getBoardsList(pageNumber, usersPerPage, sortKey, isAscending).then(function (response) {
			defer.resolve(response);
		},
		function(response){
				var a=response;
				//var b=status;
			}
		);
		
		return defer.promise;
	};
	
	me.updateBoardData = function(updatedData){

		viewBoardsFactory.updateBoard(updatedData).success(function (response, status) {
			me.navigateToSuccessModal(status);
		});
	}
	
	me.navigateToSuccessModal = function(status){
		if(status == 200)
		{
			$state.go('editBoardModal.editWindowSuccess');			
		}
		else
		{
			$state.go('login');			
		}
	};
});