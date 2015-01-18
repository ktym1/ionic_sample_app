angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.onTap = function(){
    var input = { 
    "first_name" : $scope.$$childHead.first_name, 
    "last_name" : $scope.$$childHead.last_name, 
    "email" : $scope.$$childHead.email
    }

    return $http.post('https://api.parse.com/1/classes/UserInfo', input,{
      headers:{
        'Application-Id': 'TBC',
        'X-Parse-REST-API-Key':'TBC',
        'Content-Type':'application/json'
      }
    }).success(function(){
        console.log(arguments)
    }). 
      error(function(){
        console.log(arguments)

      })
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


