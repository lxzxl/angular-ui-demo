/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import tpl from './partials/about.html';

export default [
    {
        state: 'about',
        url: '/about',
        template: tpl,
        controller: 'AboutController'
    }
];
