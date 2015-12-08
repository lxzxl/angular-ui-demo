/**
 *  BodyInit set ng-view to the index.html.
 *
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import angular from 'angular';

class Initializer extends InitBase {
    run() {
        angular.element(document.body).append(`
<div id="wrapper">
    <!-- Navigation -->
    <header></header>
    <!-- /.navbar-top-links -->
    <!-- /.navbar-static-side -->
    <div class="header-placeholder" style="height: 50px;"></div>
    <div class="visible-xs hidden-lg header-placeholder" style="height: 50px;"></div>
    <div id="page-wrapper" style="min-height: 561px;">
        <div ui-view></div>
    </div>
    <!-- /#page-wrapper -->
</div>`);
    }
}

export default Initializer;
