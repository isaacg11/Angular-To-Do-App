

Stamplay.init('todolistapp');

//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeController', homeController);
  homeController.$inject = ['homeFactory', '$state',"$http","$scope", "$stamplay"];

  function homeController(homeFactory, $state, $http, $scope, $stamplay){

  //GLOBAL VARIABLES
  var user = new Stamplay.User().Model;
  $scope.allTasks = $scope.allTasks ? $scope.allTasks : [];


  /****************************/
  /*  GET USER & USERs TASK   */
  /****************************/
  homeFactory.getUser().then(function(user) {
    if(user.isLogged()) {
      $scope.userName = user.instance.email;
      homeFactory.getTask().then(function(tasks) {
        $scope.allTasks = tasks;
      });
    } else {
      console.log("Login to continue.");
    }
	});

  
 //  /****************************/
 //  /*       CREATE TASK        */
 //  /****************************/
	$scope.addTask = function(task){  
		homeFactory.newTask(task).then(function(taskInstance){
			$scope.allTasks.push(taskInstance);
			$scope.task = "";
		});
	};

  /****************************/
  /*       COMPLETE TASK      */
  // **************************
	$scope.completeTask = function(id){
		homeFactory.updateTask(id).then(function(){
      console.log('task completed');
		});
	};

  /****************************/
  /*       DELETE TASK        */
  /****************************/
	$scope.deleteTask = function(id, index){
		homeFactory.deleteTask(id).then(function(){
			$scope.allTasks.splice(index, 1);
	  });


	};

}
})();