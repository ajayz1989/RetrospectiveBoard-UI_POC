var viewBoardsController = angular.module("viewBoardsController", ["viewBoardsService",'createBoardModuleService', 'angularUtils.directives.dirPagination','ui.router','ui.bootstrap']);

var usersData = [];

viewBoardsController.controller("viewBoardsController", function($scope,$state, viewBoardsService,$state,$http,$uibModal,createBoardService){
	
	//method for opening modals on viewBoards.html page
	$scope.openAddBoardModal=function($event){
		createBoardService.openModal($event,$scope);
	};
	
	//method for creating new board through modal on viewBoards.html page
	$scope.saveBoardModal=function(newBoardDetails){
		console.log("In saveBoardModal()");
		createBoardService.saveModalData(newBoardDetails);
	};
	
	
	$scope.users = []; //declare an empty array
	//$scope.users = viewBoardsFactory.boardList;
	$scope.totalUsers = 0;
	$scope.sortKey = "id";
	$scope.reverse = false;
	$scope.showIt = true;
    $scope.usersPerPage = 2; // this should match however many results your API puts on one page
    getResultsData(1,$scope.usersPerPage, $scope.sortKey, $scope.reverse);

    $scope.pagination = {
        current: 1
    };   
   

    $scope.pageChanged = function(newPage) {
    	getResultsData(newPage, $scope.usersPerPage, $scope.sortKey, $scope.reverse)
    };
    
   /* $scope.$watch(this.usersData, function() {
    	$scope.users = this.usersData.boardList;
	});*/
    
    //Method to fetch the existing boards
    function getResultsData(pageNumber, usersPerPage, sortKey, isAscending) {
    	viewBoardsService.getResultsPage(pageNumber, $scope.usersPerPage, $scope.sortKey, $scope.reverse, this.usersData).then(function (response) {
			var responseData = response.data;
			$scope.users =responseData.boardList;
			$scope.totalUsers = responseData.totalRecords;       
		},
    	function(response){
			var a=response;
			//var b=status;
		}
    	
    	);
    }
    
    //method to sort the table data
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    
    //adding modal controller data here
    $scope.openBoardModal=function($event,selectedBoard){   	
    	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'app/components/viewBoardsModule/modal/BoardModal.html',
		      size: 'lg',
		      scope: $scope

		    });
    	
       	$scope.updatedBoard=selectedBoard;
		$state.go('editBoardModal.editWindow');
		console.log("Inside openModal()"+$scope.updatedBoard.id);
		};
	
	$scope.saveModalData=function(savedSelectedBoardDetails){
		$scope.updatedBoard=savedSelectedBoardDetails;
		viewBoardsService.updateBoardData(savedSelectedBoardDetails);
		console.log($scope.updatedBoard);
		
	};
	$scope.cancel = function () {
		 $state.go('Base');
 	  };
 	  
 	$scope.success="New Board created successfully !!";
 	$scope.error=true;
	
 	$scope.updateBoard=function(updatedBoard){
		
	};
	
});

