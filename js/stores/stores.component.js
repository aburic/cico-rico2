(function(){
  'use strict';

angular.module('stores')

.component('storesDirective', {
  templateUrl: 'templates/stores/stores.html',
  bindings: {
    storesItem: '<'
  },
  controller: StoresController
});


StoresController.$inject = ['StoresService'];
function StoresController(StoresService) {
  var $ctrl = this;
  //$ctrl.stores = StoresService.getStores();
  // StoresService.getStores(function(data){
  //   $ctrl.stores = data;
  //   console.log($ctrl.stores);
  // });
  var promise = StoresService.getStores();
  promise.then(function(response){
    $ctrl.stores  = response.data;
  })
  .catch(function(error){
    
  });

}

// .directive('storesDirective', storesDirective);
//
// function storesDirective(){
//   var ddo={
//     templateUrl:'templates/stores/stores.html',
//     controller: 'StoresController',
//     controllerAs: "stores"
//   }
//   return ddo;
// }
// StoresController.$inject = ['StoresService'];
// function StoresController(StoresService){
//     var vm = this;
//     vm.stores = StoresService.getStores();
// }
})();
