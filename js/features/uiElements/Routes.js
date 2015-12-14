/**
 * Created by steven on 15/12/14.
 */
import buttonsTpl from './partials/buttons.html';
import gridTpl from './partials/grid.html';
import iconsTpl from './partials/icons.html';
import notificationsTpl from './partials/notifications.html';
import panelsWellsTpl from './partials/panels-wells.html';
import typographyTpl from './partials/typography.html';

export default [{
    state: 'dashboard.buttons',
    url: '/buttons',
    template: buttonsTpl
}, {
    state: 'dashboard.grid',
    url: '/grid',
    template: gridTpl
}, {
    state: 'dashboard.icons',
    url: '/icons',
    template: iconsTpl
}, {
    state: 'dashboard.notifications',
    url: '/notifications',
    template: notificationsTpl,
    controller: ['$scope', 'events', function ($scope, events) {
        $scope.openModal = function () {
            events.emit('modal');
        };
    }]
}, {
    state: 'dashboard.panelsWells',
    url: '/panels-wells',
    template: panelsWellsTpl
}, {
    state: 'dashboard.typography',
    url: '/typography',
    template: typographyTpl
},
];