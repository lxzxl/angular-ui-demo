/**
 * Created by steven on 15/12/10.
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';

class Feature extends FeatureBase {

    constructor() {
        super('dashboard');
        this.routes = Routes;
    }

    run() {
        this.mod.directive('pageWrapperResize', ['$window', function ($window) {
            return {
                restrict: 'A',
                link: function ($scope, element) {
                    var w = angular.element($window);
                    w.off('load.pageWrapper resize.pageWrapper').on('load.pageWrapper resize.pageWrapper', function () {
                        var minHeight = angular.element($window).height() - element.offset().top;
                        if (minHeight < 1) minHeight = 1;
                        element.css("min-height", (minHeight) + "px");
                    });
                }
            };
        }]);
        this.mod.run([function () {

        }]);
    }
}

export default Feature;