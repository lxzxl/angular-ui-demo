/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import tpl from './partials/home.html';

export default [
    {
        isDefault: true,
        state: 'dashboard.home',
        url: '/home',
        template: tpl,
        controller: 'HomeController'
    }
];
