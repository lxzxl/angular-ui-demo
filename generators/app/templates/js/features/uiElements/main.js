/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
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