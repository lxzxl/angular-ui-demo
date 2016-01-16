/**
 *  Defines the HomeController controller
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
var HomeController = function($scope, events, utils, HomeService) {

    $scope.$on('$destroy', function() {});
};

export default [
    '$scope',
    'events',
    'utils',
    'HomeService',
    HomeController
];
