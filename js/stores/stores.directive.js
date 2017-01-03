(function(){
  'use strict';

angular.module('stores')
.directive('storesDirective', storesDirective);

function storesDirective(){
  var ddo={
    templateUrl:'templates/stores/stores.html'
  }
  return ddo;
}
})();
