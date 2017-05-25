/*var viewBoardModalApp=angular.module("viewBoardModalApp", ['ui.router','ui.bootstrap.modal','ngAnimate','ui.bootstrap']);

viewBoardModalApp.controller('viewBoardModalController',function($scope,$state){
	

	
	//$scope.updatedBoard={boardName:"", boardDesc: "", project: "", team: 0};
	
	//get list of boards
	var boardListsData = [
	                 {"boardName":"board1", "boardDesc": "project board1", "project": "NetEnt", "team": 20},
	                 {"boardName":"board2","boardDesc": "project board2", "project": "NetEnt", "team": 25},
	                 {"boardName":"board3","boardDesc": "project board3", "project": "NetEnt", "team": 15}
	             ];
	$scope.boardLists=boardListsData;
	
	
	$scope.openModal=function($event,board){
		$scope.updatedBoard=board;
		$state.go('Modal.confirmAddToCart');
		console.log("Inside openModal()"+$scope.updatedBoard.boardName);
		};
	
	$scope.saveModalData=function(savedSelectedBoardDetails){
		$scope.updatedBoard=savedSelectedBoardDetails;
		$state.go('Modal.success');
		console.log($scope.updatedBoard);
		
	};
	$scope.cancel = function () {
		 $state.go('Base');
 	  };
 	  
 	$scope.success="Unable to save data. Please try Again!!";
 	$scope.error=false;
	
 	$scope.updateBoard=function(updatedBoard){
		
	};
	

});
*/