'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.message = 'Fork Me!!!!!!';
    $scope.message = '';

    $scope.sayHello = function() {
      $scope.message = 'Suck me!!!!';
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addAwesomeThings = function(){
      $scope.awesomeThings.push('Jasmine');
    }
  });
