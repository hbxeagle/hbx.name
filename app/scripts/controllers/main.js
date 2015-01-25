'use strict';

/**
 * @ngdoc function
 * @name mysiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mysiteApp
 */
angular.module('mysiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
