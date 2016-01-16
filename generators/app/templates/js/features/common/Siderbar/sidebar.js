/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */
'use strict';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import sidebarTpl from './sidebar.html';

class Feature extends FeatureBase {

    constructor() {
        super('SidebarModule');
    }

    run() {
        this.mod.run([
            '$templateCache',
            function ($templateCache) {
                $templateCache.put('sidebar', sidebarTpl);
            }
        ]);
        this.mod.directive('sidebar', ['$location', function () {
            return {
                templateUrl: 'sidebar',
                restrict: 'E',
                replace: true,
                scope: {},
                controller: function ($scope) {
                    $scope.selectedMenu = 'dashboard';
                    $scope.collapseVar = 0;
                    $scope.multiCollapseVar = 0;

                    $scope.check = function (x) {

                        if (x == $scope.collapseVar)
                            $scope.collapseVar = 0;
                        else
                            $scope.collapseVar = x;
                    };

                    $scope.multiCheck = function (y) {

                        if (y == $scope.multiCollapseVar)
                            $scope.multiCollapseVar = 0;
                        else
                            $scope.multiCollapseVar = y;
                    };
                }
            }
        }]);
    }
}

export default Feature;
