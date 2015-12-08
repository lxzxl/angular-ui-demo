/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('AutofocusModule');
    }

    run() {
        this.mod.directive('autofocus', function () {
            return {
                restrict: 'A',
                link: function ($scope, element) {
                    $(window).bind("load resize", function () {
                        topOffset = 50;
                        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
                        if (width < 768) {
                            $('div.navbar-collapse').addClass('collapse');
                            topOffset = 100; // 2-row-menu
                        } else {
                            $('div.navbar-collapse').removeClass('collapse');
                        }

                        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
                        height = height - topOffset;
                        if (height < 1) height = 1;
                        if (height > topOffset) {
                            $("#page-wrapper").css("min-height", (height) + "px");
                        }
                    });
                }
            };
        });
    }
}

export default Feature;
