'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
