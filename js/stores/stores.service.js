(function () {
"use strict";

angular.module('stores')
.service('StoresService', StoresService);


StoresService.$inject = ['$http'];
function StoresService($http) {
  var service = this;
  service.getStores = getStores;

  function getStores(){

    var response = $http({
      method: "GET",
      url: ("json/stores.json")
    });

    return response;
  }
}



})();
