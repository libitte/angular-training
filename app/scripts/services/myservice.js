'use strict';

/**
 * @ngdoc service
 * @name myAngularApp.myService
 * @description
 * # myService
 * Service in the myAngularApp.
 */
angular.module('myAngularApp')
  .service('myService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.hello = function() {
    // Simple GET request example :
     $http.get('sample.json').
       success(function(data) {
         console.log(data);
         return data;
       }).
       error(function(data) {
         //console.log(data);
       });
    };
  });
