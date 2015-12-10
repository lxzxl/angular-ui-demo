/**
 *  Entrance of features
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import _ from 'lodash';
import common from './common/main';
import login from './login/main';
import dashboard from './dashboard/main';
import home from './home/main';

export default _.flatten([common, login, dashboard, home]);
