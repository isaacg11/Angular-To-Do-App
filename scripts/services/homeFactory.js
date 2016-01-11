Stamplay.init('todolistapp');

//FACTORY

(function() {
  'use strict';
  angular.module('stamplay')
  .factory('homeFactory', homeFactory);

  function homeFactory($http, $q) {

  return {
    register : function(userInfo){
      var q = $q.defer();
      var user = new Stamplay.User().Model;
      user.signup(userInfo).then(function(){
        q.resolve();
      });
      return q.promise;
    },
    signIn : function(userInfo){
      var q = $q.defer();
      var user = new Stamplay.User().Model;
      user.login(userInfo.email, userInfo.password).then(function(){
        q.resolve();
      });
      return q.promise;
    },
    getUser : function(){
      var q = $q.defer();
      var user = new Stamplay.User().Model;
      user.currentUser().then(function(){
        q.resolve(user);
      });
      return q.promise;
    },
    newTask : function(newTask) {
      var q = $q.defer();
      var taskInstance = new Stamplay.Cobject('task').Model;
      taskInstance.set('description', newTask);
      taskInstance.set('deleted_status', false);
      taskInstance.save();
      q.resolve(taskInstance);
      return q.promise;
    },
    getTask : function() {
      var q = $q.defer();
      var taskCollection = new Stamplay.Cobject('task').Collection;
      var user = new Stamplay.User().Model;

      user.currentUser().then(function(){
          taskCollection.equalTo("owner", user.get("id")).
            equalTo("deleted_status", false)
            .fetch().then(function(res){
              q.resolve(taskCollection.instance);
            });
        
        });
      return q.promise;
    },
    updateTask : function(id) {
      var q = $q.defer();
      var completed = true;
      var taskInstance = new Stamplay.Cobject('task').Model;
      taskInstance.fetch(id).then(function(){
        taskInstance.set('completed_status', completed);
        taskInstance.save();
        q.resolve();
      });
      return q.promise;
    },
      deleteTask : function(id) {
        var q = $q.defer();
        var deleted = true;
        var taskInstance = new Stamplay.Cobject('task').Model;
        taskInstance.fetch(id).then(function(){
          taskInstance.set('deleted_status', deleted);
          taskInstance.save();
          q.resolve();
        });
        return q.promise;
    }

  };

}
})();
