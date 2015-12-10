/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
import _ from 'lodash';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicator');
        this.$body = angular.element(document.body);
    }

    run() {
        var self = this;
        this.mod.run([
            '$rootScope',
            'Routes',
            function ($rootScope, Routes) {
                var routeState2Class = function (stateStr) {
                    return stateStr.replace(/\./g, '-')
                };
                var classes = _.map(_.pluck(Routes, 'state'), routeState2Class).join(' ');
                $rootScope.$on('$stateChangeSuccess', function (e, route) {
                    self.$body.removeClass(classes);
                    if (route && route.state) {
                        self.$body.addClass(routeState2Class(route.state));
                    }
                });
            }
        ]);
    }
}

export default Feature;
