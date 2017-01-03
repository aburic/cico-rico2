(function(){
  'use strict';

angular.module('sale')
.directive('saleDirective', saleDirective);



function saleDirective() {
  var ddo = {
    templateUrl: 'templates/sale/sale.html',
    controller: SaleController,
    controllerAs: 'sale',
    bindToController: true
  };

  return ddo;
}


function SaleController() {
  var vm = this;

  active();
  function active(){
    $('.slider').slider({full_width: true});
  }
}
})();
