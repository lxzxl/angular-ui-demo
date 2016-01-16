/**
 *  Defines the HomeController controller
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
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
