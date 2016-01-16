/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    run() {
        this.app.config([
            '$httpProvider',
            function($httpProvider) {
                $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
                $httpProvider.defaults.withCredentials = true;
            }
        ]);
    }
}

export default Configurator;
