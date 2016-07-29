
var csrftoken = Cookies.get('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
    app = angular.module('store', []);
    app.controller('ControladorFecha',function($scope){
        $scope.result = []
        $scope.tam = $scope.result.length;
        $scope.op = 1;
        this.search = function(){
            var dsd = $('#desde').val();
           //event.preventDefault();
           $.ajax({
               type: "POST",
               url : "/searchInfo/",
               data : { 'desde' :dsd, 'hasta': $('#hasta').val() },
               success: function(data){
                   $scope.$apply(function(){
                    $scope.result = JSON.parse(data).sort(function(a,b){return a['producto'].localeCompare(b['producto'])});
                    $scope.tam = $scope.result.length;
                });
               }
           });
           return false;
       };

       this.orderP = function(){

         //  $scope.$apply(function(){
                if($scope.op == 1){
                            $scope.op = 0 ;
                    $scope.result = $scope.result.sort(function(a,b){return b['producto'].localeCompare(a['producto'])});
            }
            else{
                        $scope.op = 1 ;

                $scope.result = $scope.result.sort(function(a,b){return a['producto'].localeCompare(b['producto'])});
            }

          // });
       };
    });


    app.controller('StoreController',function(){
        this.product = gem;


    /*    this.changeTable = function(){
            var dsd = $('#desde').val();
            alert("hola");
           //event.preventDefault();
           $.ajax({
               type: "POST",
               url : "/searchInfo/",
               data : { 'desde' :dsd, 'hasta': $('#desde').val() },
               success: function(data){
                    app.result = JSON.parse(data);

                    app.lon = result.length;
               }
           });
           console.log(app.result);
       };*/
    });

    var gem = {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a precious gem to do great things.',
      canPurchase: true
    }
