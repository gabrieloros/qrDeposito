(function() {
    'use strict';
    
    angular.module('app',
    [
        'ui.router',
        'ngResource'
    ]
)

//.constant('SERVER_URL','http://localhost:8080/adr/service/')
.config(function config($stateProvider){

$stateProvider
.state('app',{
    url:'',
    views: {

      'sideBar':{
        templateUrl:'app/template/home.html',
        controller:'controladorApp as controladorApp'

      }
    }

  })


})

})();