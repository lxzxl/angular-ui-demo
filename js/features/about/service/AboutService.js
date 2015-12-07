/**
 *  Defines the AboutService
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
var AboutService = function($http, utils) {

    this.getDemoList = function() {
        return $http.get(utils.getApi('/demolist'));
    };

};

export default ['$http', 'utils', AboutService];
