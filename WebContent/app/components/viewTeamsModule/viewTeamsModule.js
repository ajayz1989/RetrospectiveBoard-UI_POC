var viewTeamsModule = angular.module("viewTeamsModule", ['angularUtils.directives.dirPagination','ui.router','ui.bootstrap.modal','viewTeamsController','ngAnimate','routingModule']);

/*viewTeamsModule.config(function($stateProvider){
	  $stateProvider.state("Base", {});

	  $stateProvider.state("Modal", {
	    views:{
	      "modal": {
	    	url:"modal/viewTeamsModal",
	        templateUrl: "app/shared/modal/modal.html",
	        controller: 'viewTeamsController'
	      }
	    },
	    onEnter: function($state){
	      // Hitting the ESC key closes the modal
	      $(document).on('keyup', function(e){
	        if(e.keyCode == 27){
	          $(document).off('keyup');
	          $state.go('Base');
	        }
	      });

	      // Clicking outside of the modal closes it
	      $(document).on('click', '.Modal-backdrop, .Modal-holder', function() {
	        $state.go('Base');
	      });

	      // Clickin on the modal or it's contents doesn't cause it to close
	      $(document).on('click', '.Modal-box, .Modal-box *', function(e) {
	        e.stopPropagation();
	      });
	    },
	    abstract: true
	  });

	  $stateProvider.state("Modal.confirmAddToCart", {
	    views:{
	      "modal": {
	    	url:"modal/viewTeamsConfirm",
	        templateUrl: "app/shared/modal/confirm.html",
	        parent: 'Modal'
	       // controller: 'confirmController'
	      }
	    }
	  });

	  $stateProvider.state("Modal.success", {
	    views:{
	      "modal": {
	    	url: "modal/viewTeamsSuccess",
	        templateUrl: "app/shared/modal/success.html",
	        parent: 'Modal'
	        //controller: 'successController'
	      }
	    }
	  });
	  
	  //for viewBoard Modal
	  $stateProvider.state("Modal.viewBoardEditModal", {
		    views:{
		      "modal": {
		        templateUrl: "viewBoardEditModal.html",
		        parent: 'Modal'
		       // controller: 'confirmController'
		      }
		    }
		  });

		  $stateProvider.state("Modal.viewBoardEditSuccessModal", {
		    views:{
		      "modal": {
		        templateUrl: "viewBoardEditSuccessModal.html",
		        parent: 'Modal'
		        //controller: 'successController'
		      }
		    }
		  });
	  
	});
*/