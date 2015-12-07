/**
 *  Defines the TopNavbar Module.
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';
import tpl from './TopNavbar.html';
import asideTpl from './Aside.html';

class Feature extends FeatureBase {

    constructor() {
        super('TopnavModule');
        this.$body = angular.element(document.body);
    }

    beforeStart() {
        this.$body.prepend(tpl);
    }

    run() {
        this.mod.run([
            '$templateCache',
            function($templateCache) {
                $templateCache.put('aside', asideTpl);
            }
        ]);
        this.mod.controller('HeaderCtrl', [
            function() {}
        ]);
    }
}

export default Feature;
