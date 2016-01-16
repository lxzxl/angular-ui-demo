/**
 *  Defines the HomeService
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
var HomeService = function($http, utils) {

    this.getStates = function() {
        return $http.get(utils.getApi('/states'));
    };

    this.getMenus = function() {
        return $http.get(utils.getApi('/menus'));
    };

    this.getDropdown = function() {
        return $http.get(utils.getApi('/dropdown'));
    };

};

export default ['$http', 'utils', HomeService];
