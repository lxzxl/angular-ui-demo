/**
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>.
 */
'use strict';
import tpl from './partials/main.html';

export default [{
    state: 'dashboard.table',
    url: '/table',
    template: tpl
}];