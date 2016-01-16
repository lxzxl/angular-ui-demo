/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';

class Feature extends FeatureBase {

    constructor() {
        super('table');
        this.routes = Routes;
    }

    run() {
        this.mod.run([function () {
        }]);
    }
}

export default Feature;