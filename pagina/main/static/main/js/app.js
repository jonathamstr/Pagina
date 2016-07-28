

(function(){
     app = angular.module('store', []);
     result = [];
     lon = result.length;
    app.controller('StoreController',function(){
        this.product = gem;
        this.resultado = result ;
        this.lon = lon;
        
    });

    var gem = {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a precious gem to do great things.',
      canPurchase: true
    }



})();
