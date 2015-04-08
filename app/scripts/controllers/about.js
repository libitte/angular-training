'use strict';

/**
 * @ngdoc function
 * @name myAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAngularApp
 */
angular.module('myAngularApp')
  .controller('AboutCtrl', function ($scope, $http, myService) {
    $scope.myModel;

    $scope.showMyModel = function() {
      console.log($scope.myModel);
    };


    // Simple GET request example :
    //$http.get('sample.json').
      //success(function(data) {
      //  // this callback will be called asynchronously
      //  // when the response is available
      //  console.log(data);
      //  $scope.myData = data;
      //}).
      //error(function(data) {
      //// called asynchronously if an error occurs
      //// or server returns response with an error status.
      //  console.log(data);
      //});

    //myService.hello();

    $scope.hello = function() {
      myService.hello();
    };
  });
