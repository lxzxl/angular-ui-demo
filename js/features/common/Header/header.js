/**
 * Created by steven on 15/12/7.
 */
'use strict';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import headerTpl from './header.html';
import headerNotificationTpl from './header-notification.html';

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
            }
        ]);
        this.mod.directive('header', function () {
            return {
                templateUrl: 'header',
                restrict: 'E',
                replace: true
            }
        });
        this.mod.directive('headerNotification', function () {
            return {
                templateUrl: 'headerNotification',
                restrict: 'E',
                replace: true
            }
        });
    }
}

export default Feature;
