'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
