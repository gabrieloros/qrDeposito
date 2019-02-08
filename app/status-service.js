(function() {
    'use strict';

    angular
        .module('app')
        .factory('statusService', function($resource) {
            var route = "http://localhost:8089/SimpleTask_Rest/adr/service/"
            var resource = $resource(route, {}, {
                'getListTheInfoForm': { url: route + "dataInfoForm", method: 'GET' },
                'deleteClaim': { url: route + "deleteClaim/:claimId", claimId: '@claimId', method: 'GET' },
                'getListClaimsAssignmentByUser': { url: route + "listClaimsAssignmentByUser/:userId/:groupId", userId: '@userId', groupId: '@groupId', method: 'GET' },
                'getListClaimsNotAssignment': { url: route + "listClaimsNotAssignment/:groupId", groupId: '@groupId', method: 'GET' },
                'getGroupInfoForm': { url: route + "groupForm", method: 'GET' },
                'getListClaimsAssignmentByGroup': { url: route + "listClaimsAssignmentByGroup", method: 'GET' }
            });
            return resource;
        });
})();