/**
 * Created by steven on 15/12/12.
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