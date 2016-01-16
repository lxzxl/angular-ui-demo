/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */
'use strict';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import headerTpl from './header.html';
import headerNotificationTpl from './header-notification.html';
import sidebarTpl from './sidebar.html';

class Feature extends FeatureBase {

    constructor() {
        super('HeaderModule');
    }

    run() {
        this.mod.run([
            '$templateCache',
            function ($templateCache) {
                $templateCache.put('header', headerTpl);
                $templateCache.put('headerNotification', headerNotificationTpl);
                $templateCache.put('sidebar', sidebarTpl);
            }
        ]);
        this.mod.directive('header', function () {
            return {
                templateUrl: 'header',
                restrict: 'E',
                replace: true,
                controller: ['$scope', 'events', function ($scope, events) {
                    $scope.toggleCollapse = function () {
                        $scope.isCollapsed = !$scope.isCollapsed;
                        events.emit('toggleCollapse', $scope.isCollapsed);
                    };
                }]
            }
        });
        this.mod.directive('headerNotification', function () {
            return {
                templateUrl: 'headerNotification',
                restrict: 'E',
                replace: true
            }
        });
        this.mod.directive('sidebar', function () {
            return {
                templateUrl: 'sidebar',
                restrict: 'E',
                replace: true,
                controller: ['$scope', function ($scope) {
                    $scope.isCollapsed = true;
                    $scope.$on('toggleCollapse', (e, data) => {
                        $scope.isCollapsed = data;
                    });
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
                }]
            }
        });
    }
}

export default Feature;
