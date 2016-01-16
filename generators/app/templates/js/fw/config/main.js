/**
 *  Entrance of config
 *
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
 *
 */
'use strict';
import app from './AppConfig';
import notifier from './NotifierConfig';
import router from './RouterConfig';
import sso from './SSOConfig';

export default [
    app,
    notifier,
    router,
    sso
];
