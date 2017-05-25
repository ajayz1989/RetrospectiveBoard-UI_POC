var createBoardModuleService = angular.module("createBoardModuleService",['createBoardModuleFactory','ui.router','ui.bootstrap']);

createBoardModuleService.service('createBoardService', function(createBoardFactory,$state,$uibModal){
	var me = this;
		
	//adding modal controller data here
	me.openModal=function($event,$scope){   	
    	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'app/components/createBoardModule/addBoardModal/addBoardModal.html',
		      size: 'lg',
		      scope: $scope

		    });
    	
		$state.go('addBoardModal.addBoardWindow');
		console.log("Inside Board openModal()");
		 
		};
	
		me.saveModalData=function(addNewBoardDetails){
	
			me.saveNewBoard(addNewBoardDetails);		
			
			console.log("Inside Board saveModalData()");
		};
	
	/**
	 *  for creating and saving new board data. 
	 */
	me.saveNewBoard = function(dataSet){
		createBoardFactory.saveNewBoard(dataSet).success(function (response, status) {
			console.log(status);
			this.data = response.Status;
			
			me.navigateAfterSavingBoard(dataSet, status);
		})
		.error(function(response, status){
			alert("Unable to save data...try again"+status);
		});
	}
	
	
	me.navigateAfterSavingBoard = function(dataSet, status){
		if(status == 201 || status==204)
		{
			$state.go('addBoardModal.addBoardWindowSuccess');			
		}else{
			console.log("unable to save new board details");
		}
	}
});