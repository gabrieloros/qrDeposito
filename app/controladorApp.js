
(function() {
    'use strict';

    angular
        .module('app')
        .controller('controladorApp', controladorApp);

        controladorApp.$inject = ['$scope','$http','statusService','$interval','$state'];

    function controladorApp($scope,$http,statusService,$interval,$state) {
    var controladorApp = this;
    controladorApp.form = upQr;
    controladorApp.data = {};
    $scope.nameqr = null;
    $scope.listBrand = [];
    $scope.listModel = [];
    $scope.viewButton = false;
           
    statusService.getListTheInfoForm({}, function(response) {
          
        $scope.listBrand.push({ id: 0, name: "Phillips" });
        $scope.listModel.push({ id: 0, name: "RP-2334" });
       

    }, function(error) {
           //borrar eso despues
        $scope.listBrand.push({ id: 0, name: "Phillips" });
        $scope.listModel.push({ id: 0, name: "RP-2334" });
      
        console.log(error);
    });

    var fecha = new Date(); 
    var mes = fecha.getMonth()+1; 
    var dia = fecha.getDate(); 
    var ano = fecha.getFullYear(); 
    if(dia<10)
    dia='0'+dia; 
    if(mes<10)
    mes='0'+mes 
    document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;
    $scope.upDate = dia+"-"+mes+"-"+ano

       
            angular.element(document).ready(function() {
                angular.element('#reader').html5_qrcode(function(data) { 
                      console.log(data); 
                     $scope.qrDataName = data;
                      angular.element("#reader").html5_qrcode_stop();
                      var d = document.getElementById("reader");
                      while (d.hasChildNodes())
                      d.removeChild(d.firstChild);
                      $scope.viewButton = true;
                    },
                    function(error) {
                      console.log(error);
                    },
                    function(videoError) {
                      console.log(videoError);
                    }
                );
            });
       
     

        $scope.qrName = function(){
            if($scope.qrDataName != null){

                $scope.nameqr = $scope.qrDataName;
            }
            else
            {
                $scope.nameqr = null;
            }
        }

        $interval(function() { $scope.qrName(); }, 400);
       

        $scope.newQR = function(){
            $scope.nameqr = null;
           
            angular.element(document).ready(function() {
                angular.element('#reader').html5_qrcode(function(data) { 
                    $scope.viewButton = false;
                      console.log(data); 
                     $scope.qrDataName = data;
                      angular.element("#reader").html5_qrcode_stop();
                      var d = document.getElementById("reader");
                      while (d.hasChildNodes())
                      d.removeChild(d.firstChild);
                      $scope.viewButton = true;
                    },
                    function(error) {
                      console.log(error);
                    },
                    function(videoError) {
                      console.log(videoError);
                    }
                );
            });
        }




        
        function upQr(){
            if($scope.nameqr != null){

                $http({
                    method: 'POST',
                    url: "url",
                    params: { brand: controladorApp.data.brand, model: controladorApp.data.model, upDate: $scope.upDate, codeQr: $scope.nameqr}
                     }).then(function(response) {
                             if (response.data.result == true) {
                                   alert("Se agrego correctamente QR ");
                                 } else {
                                     alert(response.data.data);
                                     }
                                 });
                            }
                            
                        }
    }

})();
