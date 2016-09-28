angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //In your controller you'll have a getMessages function and a postMessage function, but should be placed on $scope.

  //The getMessages function will call the getData method on the messageService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)

  $scope.getMessages = function() {
    messageService.getMessages()
      .then( function(response) {
          $scope.messages = response.data;
      })
  }

  $scope.getMessages();

  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will then post it to the backend.

  $scope.postMessage = function(message) {
    messageService.postMessage(message)
      .then( function(response) {
        console.log("postMessage response=", response);
      })
  }



  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
    $scope.getMessages();
  }, 1500)
})
