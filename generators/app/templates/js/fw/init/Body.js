/**
 *  BodyInit set ng-view to the index.html.
 *
 *
 *  @author  <%= answers.username %>
 *  @date  <%= answers.date %>
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import angular from 'angular';

class Initializer extends InitBase {
    run() {
        angular.element(document.body).append('<div ui-view></div>');
    }
}

export default Initializer;
