/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */

'use strict';
import tpl from './partials/login.html';

export default [{
    state: 'login',
    url: '/login',
    template: tpl
}];
