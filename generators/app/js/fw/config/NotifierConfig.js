/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
 *
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
            'notifierProvider',
            function(notifierProvider) {
                notifierProvider.setPlacement('top', 'right');
                notifierProvider.setUseNativeWhileBlur(true);
            }
        ]);
    }
}

export default Configurator;
