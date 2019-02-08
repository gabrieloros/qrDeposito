/**
 * Created by Equipo 1 on 24/10/2017.
 */

(function() {
    'use strict';

    angular
        .module('app')
        .factory('listUsers', listUsers);

    listUsers.$inject = ['$http', '$q', '$timeout','$resource'];

    function listUsers($http, $q,  $timeout,$resource) {

        var resourceUrl =  'http://localhost:8080/SimpleTask_Rest/adr/service/listUsers';
        var ws = new WebSocket("ws:http://localhost:8080/SimpleTask_Rest/adr/service/listUsers");

        ws.onopen = function(){
            console.log("Se abrio el socket users");
        };

        return $resource(resourceUrl,{},

            {'get' :
            {method :"GET",
                //contentType: "application/x-www-form-urlencoded",
                headers:"application/json",
                contentType: "text/pain",
                isArray:false}
        } );

    }
})();
                            