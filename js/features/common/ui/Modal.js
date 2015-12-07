/**
 *  Defines the Modal
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
import FeatureBase from 'lib/FeatureBase';

var defaults = {
    animation: 'am-fade',
    placement: 'top',
    html: false,
    backdrop: true,
    keyboard: true
};

class Feature extends FeatureBase {

    constructor() {
        super('ModalWrapper');
    }

    run() {
        this.mod.run([
            'events',
            '$uibModal',
            function (events, $uibModal) {
                events.on('modal', function (opts) {
                    var options = _.defaults(opts, defaults);
                    var modalScope = (opts.scope || $rootScope).$new();
                    modalScope.title = opts.title;
                    modalScope.content = opts.content;
                    options.scope = modalScope;
                    $uibModal.open(options);
                });

            }
        ]);
    }
}

export default Feature;
