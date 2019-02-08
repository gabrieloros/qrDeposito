(function() {
    'use strict';

    angular
        .module('app')
        .factory('statusService', function($resource) {
            var route = "http://localhost:8089/SimpleTask_Rest/adr/service/"
            var resource = $resource(route, {}, {
                'getListTheInfoForm': { url: route + "dataInfoForm", method: 'GET' },
            });
            return resource;
        });
})();