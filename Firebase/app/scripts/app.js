'use strict';
//
// /**
//  * @ngdoc overview
//  * @name firebaseApp
//  * @description
//  * # firebaseApp
//  *
//  * Main module of the application.
//  */
// angular.module('firebaseApp', [
//     'firebase',
//     'firebase.utils',
//     'simpleLogin'
//   ]);
//
// var app = angular.module("instaComments", ["firebase"]);
//
// app.controller("MessageController", function($scope, $firebase) {
//   var ref = new Firebase("https://instacomments.firebaseio.com/messages");
//   var sync = $firebase(ref);
//   $scope.messages = sync.$asArray();
//   $scope.addMessage = function(text) {
//     $scope.messages.$add({text: text});
//   }
// });
var fireApp = angular.module("fireApp", ["firebase"]);

fireApp.controller('FireController', ['$scope', '$firebase',

  function($scope, $firebase) {
    var ref = new Firebase("https://instacomments.firebaseio.com/");
    $scope.messages = $firebase(ref).$asArray();
    //ADD MESSAGE METHOD
    $scope.newMessage = function() {
      //LISTEN FOR RETURN KEY
      //if (e.keyCode === 13 && \$scope.msg) {
        //ALLOW CUSTOM OR ANONYMOUS USER NAMES -->
        var name = $scope.name || 'A Ghost!!!';
        $scope.messages.$add({from: "-" + name, body: $scope.chats});
        //RESET MESSAGE
        $scope.chats = "";
    }
  }
]);
