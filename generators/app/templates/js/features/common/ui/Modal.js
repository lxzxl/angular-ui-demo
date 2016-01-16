/**
 *  Defines the Modal
 *
 *  @author  steven
 *  @date    Dec 7, 2015
 *
 */
import FeatureBase from 'lib/FeatureBase';
import tpl from './modal.html';

var defaults = {
    animation: true,
    //templateUrl: 'myModalContent.html',
    template: tpl,
    controller: 'ModalInstanceCtrl',
    size: 'sm'
};

class Feature extends FeatureBase {

    constructor() {
        super('ModalWrapper');
    }

    run() {
        this.mod.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
            $scope.ok = function () {
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);
        this.mod.run([
            'events',
            '$uibModal',
            function (events, $uibModal) {
                events.on('modal', function (opts) {
                    var options = _.defaults(opts || {}, defaults);
                    var modalInstance = $uibModal.open(options);
                });

            }
        ]);
    }
}

export default Feature;
