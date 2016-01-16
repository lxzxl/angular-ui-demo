/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import _ from 'lodash';
import ConfiguratorBase from 'lib/ConfiguratorBase';
import __config from 'etc/config';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
        this.config = __config;
    }

    run() {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        var routes = _.chain(this.features)
            .filter('routes')
            .pluck('routes')
            .flatten()
            .value();

        var defaultRoutes = routes.filter(function (route) {
            return route.isDefault;
        });

        if (defaultRoutes.length === 0) {
            console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
        } else if (defaultRoutes.length > 1) {
            var defaultStates = _.pluck(defaultRoutes, 'state');
            console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultStates.join(', ') + ']. Try to correct it');
        }

        var routeStates = _.pluck(routes, 'state').sort();

        for (var i = 0; i < routeStates.length - 1; i++) {
            if (routeStates[i] === routeStates[i + 1]) {
                throw new Error('Duplicated Route: [ ' + routeStates[i] + ' ]');
            }
        }

        this.app.constant('Routes', routes);

        this.app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
            function ($locationProvider, $stateProvider, $urlRouterProvider) {

                //config each router
                _.each(routes,  ro => {
                    $stateProvider.state(ro.state, ro);
                });

                //config default page
                var defaultRouter = _.find(routes, 'isDefault');
                if (defaultRouter) {
                    $urlRouterProvider.otherwise(defaultRouter.url);
                }

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true
                });
            }
        ]);
    }
}

export default Configurator;
