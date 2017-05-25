var constantsModule = angular.module('constantsModule', []);

var BASE_URL = "http://app-toolsuite.rhcloud.com/rb/webapi/"; //"http://localhost:8088//RetrospectiveBoard/webapi/";

/**
 * This module contains all the constants used in the application. we need to declare a method
 * returning the constant, and add a getter for the same in the return section
 */
constantsModule.factory('ConstantsFactory', function(){
	
	//returns the URL required for the login validation
	var loginURL = function(){
		return BASE_URL+ 'login';
	};
	
	var logoutURL = function(){
		return BASE_URL+ 'logout';
	};
	
	var signUpURL = function(){
		return BASE_URL+ 'user/saveUser';
	};
	
	var createUserURL = function(){
		return BASE_URL + "hello/user";
	};
	
	var createBoardURL = function(){
		return BASE_URL + "board/saveBoard";
	};
	
	var viewBoardsURL = function(){
		return BASE_URL + "board";
	};
	
	var viewTeamsURL = function(){
		return BASE_URL + "team";
	};
	
	var saveTeamsURL = function(){
		return BASE_URL + "team/saveTeam";
	};
	
	var saveBoardsURL = function(){
		return BASE_URL + "board/saveBoard";
	};
	
	
	
	return{
		getLoginURL : loginURL,
		getLogoutURL : logoutURL,
		getSignUpURL : signUpURL,
		getCreateUserURL : createUserURL,
		getCreateBoardURL : createBoardURL,
		getViewBoardsURL : viewBoardsURL,
		getViewTeamsURL : viewTeamsURL,
		getSaveTeamsURL : saveTeamsURL,
		getSaveBoardsURL : saveBoardsURL
	};
});