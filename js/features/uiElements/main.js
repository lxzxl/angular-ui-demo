/**
 * Created by steven on 15/12/14.
 */
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';

class Feature extends FeatureBase {

    constructor() {
        super('uiElements');
        this.routes = Routes;
    }

    run() {
        this.mod.run([function () {
        }]);
    }
}

export default Feature;