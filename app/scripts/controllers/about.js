'use strict';

/**
 * @ngdoc function
 * @name mysiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mysiteApp
 */
angular.module('mysiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
