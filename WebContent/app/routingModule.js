var routingModule = angular.module("routingModule", ['angularUtils.directives.dirPagination','ui.router','ngAnimate','ui.bootstrap','angular-loading-bar']);

routingModule.config(function($stateProvider, $urlRouterProvider) {
	
	//$urlRouterProvider.otherwise('/login');
	 
   // $urlRouterProvider.when('', '/login');
	
	$stateProvider.state('login', {
        url: '/login',
        views: {
			 '' : {
				 templateUrl: 'app/shared/mainContainer/LoginContainer.html'
			 },
			 'header@login': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'dataContainer@login' : {
				  templateUrl: 'app/components/loginModule/Login.html',
	              controller : 'loginController'
			 },
			 'footer@login': { 
                 templateUrl: 'app/shared/footer.html'
            }
		}
		
    })		
	
	.state('createBoard', {
        url: '/createBoard',
        views: {
			 '' : {
				 templateUrl: 'app/shared/mainContainer/MainContainer.html'
			 },
			 'header@createBoard': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'leftMenu@createBoard': { 
                 templateUrl: 'app/shared/leftMenu/LeftMenu.html'
            },
			 'dataContainer@createBoard': { 
                 templateUrl: 'app/components/createBoardModule/CreateBoard.html',
                 controller : 'createBoardController'
            },
			 'footer@createBoard': { 
                 templateUrl: 'app/shared/footer.html'
            }
		}
    })
    
    .state('viewBoards', {
        url: '/viewBoards',
        views: {
			 '' : {
				 templateUrl: 'app/shared/mainContainer/MainContainer.html'
			 },
			 'header@viewBoards': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'footer@viewBoards': { 
                 templateUrl: 'app/shared/footer.html'
            },
			 'leftMenu@viewBoards': { 
                 templateUrl: 'app/shared/leftMenu/LeftMenu.html'
            },
			 'dataContainer@viewBoards': { 
                 templateUrl: 'app/components/viewBoardsModule/ViewBoards.html',
                 controller : 'viewBoardsController'
            }
		}
    })
    //adding states from view Boards module directly 
  
    .state("editBoardModal", {
   
        templateUrl: "app/components/viewBoardsModule/modal/BoardModal.html",
        controller: 'viewBoardsController',
        parent: 'viewBoards',
        abstract: true
         })
         
    .state("editBoardModal.editWindow", {
		    views:{
		      "editBoardModal@": {
		        templateUrl: "app/components/viewBoardsModule/modal/BoardConfirm.html",
		        parent: 'editBoardModal'
		      },
		    },
		  })

    .state("editBoardModal.editWindowSuccess", {
		    views:{
		      "editBoardModal@": {
		        templateUrl: "app/components/viewBoardsModule/modal/BoardSuccess.html",
		        parent: 'editBoardModal'
		      }
		    }
		  })
	
		  
//adding states from add new Boards module directly
  
    .state("addBoardModal", {
   
        templateUrl: "app/components/createBoardModule/addBoardModal/addBoardModal.html",
        controller: 'viewBoardsController',
        parent: 'viewBoards',
        abstract: true
         })
         
    .state("addBoardModal.addBoardWindow", {
		    views:{
		      "addBoardModal@": {
		        templateUrl: "app/components/createBoardModule/addBoardModal/addBoardWindow.html",
		        parent: 'addBoardModal'
		      },
		    },
		  })

    .state("addBoardModal.addBoardWindowSuccess", {
		    views:{
		      "addBoardModal@": {
		        templateUrl: "app/components/createBoardModule/addBoardModal/addBoardWindowSuccess.html",
		        parent: 'addBoardModal'
		      }
		    }
		  })
	//  End
	
	.state('addUser', {
        url: '/addUser',
        views: {
			 '' : {
				 templateUrl: 'MainContainer.html'
			 },
			 'header@addUser': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'footer@addUser': { 
                 templateUrl: 'app/shared/footer.html'
            },
			 'leftMenu@addUser': { 
                 templateUrl: 'LeftMenu.html'
            },
			 'dataContainer@addUser': { 
                 templateUrl: 'CreateUser.html',
                 controller : 'createUserController'
            }
		}
    })
    .state('signup', {
        url: '/signup',
        views: {
			 '' : {
				 templateUrl: 'app/shared/mainContainer/LoginContainer.html'
			 },	
			 'header@signup': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'footer@signup': { 
                 templateUrl: 'app/shared/footer.html'
            },
			 'dataContainer@signup': { 
                 templateUrl: 'app/components/signUpModule/SignUp.html',
                 controller : 'signUpController'
            }
		}
    })
    .state('aboutus', {
        url: '/aboutus',
        views: {
        	 '' : {
				 templateUrl: 'app/shared/mainContainer/LoginContainer.html'
        	  },
			  'header@aboutus': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
              },
			  'footer@aboutus': { 
                 templateUrl: 'app/shared/footer.html'
              },
 			  'dataContainer@aboutus': { 
                  templateUrl: 'app/components/aboutUsModule/aboutus.html',
             }
		}
    })
/*    .state('service', {
        url: '/aboutus#service',
        views: {
        	 '' : {
				 templateUrl: 'app/shared/mainContainer/LoginContainer.html'
        	  },
			  'header@aboutus': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
              },
			  'footer@aboutus': { 
                 templateUrl: 'app/shared/footer.html'
              },
 			  'dataContainer@aboutus': { 
                  templateUrl: 'app/components/aboutUsModule/aboutus.html',
             }
		}
    })*/
    .state('viewTeams', {
        url: '/viewTeams',
        views: {
			 '' : {
				 templateUrl: 'app/shared/mainContainer/MainContainer.html'
			 },
			 'header@viewTeams': { 
                 templateUrl: 'app/shared/header/Header.html',
                 controller : 'authenticationController'
            },
			 'footer@viewTeams': { 
                 templateUrl: 'app/shared/footer.html'
            },
			 'leftMenu@viewTeams': { 
                 templateUrl: 'app/shared/leftMenu/LeftMenu.html'
            },
			 'dataContainer@viewTeams': { 
                 templateUrl: 'app/components/viewTeamsModule/ViewTeams.html',
                 controller : 'viewTeamsController'
            }
		}
    }) 
    
//adding states from view Teams module directly at one place
  
   .state("editTeamModal", {
   
        templateUrl: "app/components/viewTeamsModule/modals/editTeamModal.html",
        controller: 'viewTeamsController',
        parent: 'viewTeams',
        abstract: true
         })
         
   .state("editTeamModal.editWindow", {
		    views:{
		      "editTeamModal@": {
		        templateUrl: "app/components/viewTeamsModule/modals/updateTeam.html",
		        parent: 'editTeamModal'
		      },
		    },
		  })

   .state("editTeamModal.editWindowSuccess", {
		    views:{
		      "editTeamModal@": {
		        templateUrl: "app/components/viewTeamsModule/modals/updateTeamSuccess.html",
		        parent: 'editTeamModal'
		      }
		    }
		  })
	
		  
	//adding states from add new Teams module directly here
	  
	   .state("addTeamModal", {
	   
	        templateUrl: "app/components/createTeamModule/addTeamModal/addTeamModal.html",
	        controller: 'createTeamController',
	        parent: 'viewTeams',
	        abstract: true
	         })
	         
	   .state("addTeamModal.addTeamWindow", {
			    views:{
			      "addTeamModal@": {
			        templateUrl: "app/components/createTeamModule/addTeamModal/addTeamWindow.html",
			        parent: 'addTeamModal'
			      },
			    },
			  })

	   .state("addTeamModal.addTeamWindowSuccess", {
			    views:{
			      "addTeamModal@": {
			        templateUrl: "app/components/createTeamModule/addTeamModal/addTeamWindowSuccess.html",
			        parent: 'addTeamModal'
			      }
			    }
			  });
		//  End	  
		  
});
