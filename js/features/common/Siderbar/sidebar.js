/**
 * Created by steven on 15/12/7.
 */
'use strict';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import sidebarTpl from './header.html';

class Feature extends FeatureBase {

    constructor() {
        super('SidebarModule');
        this.$body = angular.element(document.body);
    }

    beforeStart() {
        this.$body.prepend(tpl);
    }

    run() {
        this.mod.run([
            '$templateCache',
            function ($templateCache) {
                $templateCache.put('sidebar', siderbarTpl);
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
