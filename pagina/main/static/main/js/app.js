

(function(){
    var app = angular.module('store', []);

    app.controller('StoreController',function(){
        this.product = gem;
    });

    var gem = {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a precious gem to do great things.',
    }

})();
