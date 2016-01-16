/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
 *
 */
'use strict';
import tpl from './partials/home.html';

export default [{
    isDefault: true,
    state: 'dashboard.home',
    url: '/home',
    template: tpl,
    controller: 'HomeController'
}];
