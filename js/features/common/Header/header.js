/**
 * Created by steven on 15/12/7.
 */
'use strict';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import headerTpl from './header.html';

class Feature extends FeatureBase {

    constructor() {
        super('HeaderModule');
        this.$body = angular.element(document.body);
    }

    beforeStart() {
        this.$body.prepend(tpl);
    }

    run() {
        this.mod.run([
            '$templateCache',
            function ($templateCache) {
                $templateCache.put('header', headerTpl);
            }
        ]);
        this.mod.directive('header', function () {
            return {
                templateUrl: 'header',
                restrict: 'E',
                replace: true
            }
        });
    }
}

export default Feature;
