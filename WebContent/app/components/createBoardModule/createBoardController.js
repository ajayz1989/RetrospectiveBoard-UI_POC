var createBoardController = angular.module('createBoardController', ['createBoardModuleService']);

createBoardController.controller("createBoardController", function($scope, createBoardService){
	
	$scope.viewTeamName = "";
	$scope.showTeamName= false;
	$scope.viewProjectName = "-Select-";
	
	
	$scope.saveNewBoard = function(){

		createBoardService.saveNewBoard(data);		
	};
});