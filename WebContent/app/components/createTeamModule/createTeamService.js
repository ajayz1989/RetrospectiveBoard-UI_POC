var createTeamModuleService = angular.module("createTeamModuleService",['createTeamModuleFactory','ui.router','ui.bootstrap']);

createTeamModuleService.service('createTeamService', function(createTeamFactory,$state,$uibModal){
	var me = this;
	
	//adding modal controller data here
	me.openModal=function($event,$scope){   	
    	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'app/components/createTeamModule/addTeamModal/addTeamModal.html',
		      size: 'lg',
		      scope: $scope

		    });
    	
		$state.go('addTeamModal.addTeamWindow');
		console.log("Inside openModal()");
		};
	
		me.saveModalData=function(addNewTeamDetails,$scope){
			createTeamFactory.createNewTeam(addNewTeamDetails).success(function (response, status) {
				$state.go('addTeamModal.addTeamWindowSuccess');
				console.log("Inside saveModalData()"+status);
			})
			.error(function (data, status, header, config) {
	                var test1 = data;
	                var test2 = status;
	                var test3 = header;
	                var test4 = config;
	            });
			$state.go('addTeamModal.addTeamWindowSuccess');
			console.log("Inside saveModalData()"+me.updatedBoard);
	};
});