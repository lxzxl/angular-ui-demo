/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import AboutController from './controller/AboutController';
import AboutService from './service/AboutService';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    run() {
        this.mod.controller('AboutController', AboutController);
        this.mod.service('AboutService', AboutService);
    }
}

export default Feature;
