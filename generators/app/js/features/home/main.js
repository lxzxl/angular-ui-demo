/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import HomeService from './service/HomeService';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    run() {
        this.mod.controller('HomeController', HomeController);
        this.mod.service('HomeService', HomeService);
        this.mod.run([function () {
            
        }]);
    }
}

export default Feature;
