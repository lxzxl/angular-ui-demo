/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
 *
 */
'use strict';
import _ from 'lodash';
import common from './common/main';
import login from './login/main';
import dashboard from './dashboard/main';
import home from './home/main';
import tables from './tables/main';
import forms from './forms/main';
import uiElements from './uiElements/main';

export default _.flatten([common, login, dashboard, home, tables, forms, uiElements]);
