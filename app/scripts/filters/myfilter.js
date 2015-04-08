'use strict';

/**
 * @ngdoc filter
 * @name myAngularApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the myAngularApp.
 */
angular.module('myAngularApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input.toUpperCase();
    };
  });
