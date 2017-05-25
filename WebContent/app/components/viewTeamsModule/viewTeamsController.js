var viewTeamsController = angular.module("viewTeamsController", ['viewTeamsService','createTeamModuleService', 'angularUtils.directives.dirPagination','ui.router','ui.bootstrap']);

var usersData = [];

viewTeamsController.controller("viewTeamsController", function($scope,$state,viewTeamsService,$uibModal,createTeamService){
	//method for opening modals on viewTeams.html page
	$scope.openAddTeamModal=function($event){
		createTeamService.openModal($event,$scope);
	};
	
	$scope.saveTeamModal=function(newTeamDetails){
		createTeamService.saveModalData(newTeamDetails,$scope);
		$scope.addedTeamDetails=newTeamDetails;
	};
	
	$scope.teams = []; //declare an empty array
	$scope.totalTeams = 0;
	$scope.sortKey = "id";
	$scope.reverse = false;
	$scope.showIt = true;
    $scope.teamsPerPage = 2; // this should match however many results your API puts on one page
    getResultsData(1,$scope.teamsPerPage, $scope.sortKey, $scope.reverse);

    $scope.pagination = {
        current: 1
    };   
   

    $scope.pageChanged = function(newPage) {
    	getResultsData(newPage, $scope.teamsPerPage, $scope.sortKey, $scope.reverse)
    };
    
    $scope.$watch(this.teamsData, function() {
    	$scope.teams = this.teamsData;
	});
    
    //Method to fetch the existing teams
    function getResultsData(pageNumber, teamsPerPage, sortKey, isAscending) {
    	viewTeamsService.getResultsPage(pageNumber, $scope.teamsPerPage, $scope.sortKey, $scope.reverse, this.teamsData).then(function (response) {
			var responseData = response.data;
			$scope.teams =responseData.teamList;
			$scope.totalTeams = responseData.totalRecords;       
		});
    }
    
    //method to sort the table data
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };
    
    
    //adding modal controller data here
    $scope.openModal=function($event,selectedTeam){   	
    	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'app/shared/modal/modal.html',
		      size: 'lg',
		      scope: $scope
		    });    	
       	$scope.updatedTeam=selectedTeam;
		$state.go('editTeamModal.editWindow');
		console.log("Inside openModal()"+$scope.updatedTeam.id);
		};
	
	$scope.saveModalData=function(savedSelectedteamDetails){
		$scope.updatedTeam=savedSelectedteamDetails;
		viewTeamsService.updateTeamData(savedSelectedteamDetails);
		
		console.log($scope.updatedTeam);
		
	};
	
	//Method to delete the team data
	$scope.deleteTeam=function(teamId){
		viewTeamsService.deleteTeamData(teamId);
		
		console.log($scope.updatedTeam);
		
	};
	
 	$scope.success="Unable to save data. Please try Again!!";
 	$scope.error=true;
	
 	$scope.updateteam=function(updatedteam){
 		
 	};
});

