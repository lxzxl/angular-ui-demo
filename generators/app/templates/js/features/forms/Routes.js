/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */
'use strict';
import tpl from './partials/main.html';

export default [{
    state: 'dashboard.form',
    url: '/form',
    template: tpl
}];