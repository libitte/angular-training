'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:MeryCtrl
 * @description
 * # MeryCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('MeryCtrl', function ($scope, $http, $timeout) {

//    $http.get('/sample.json').success(function(data) {
    $http.get('/api/images').success(function(data) {
      $scope.images = data.images;
    });

    $scope.addImage = function(image) {
      image.status = 'adding';

      $http.post('/api/images', image).success(function(data) {
        console.log(data);

        $timeout(function() {
          image.status = 'added';
        }, 1000);
      });
    };
  });
