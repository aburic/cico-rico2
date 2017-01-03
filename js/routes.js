(function () {
'use strict';

angular.module('CicoRico')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home/home.html'
  })
  .state('aboutUs',{
    url:'/aboutUs',
    templateUrl:'templates/about/about.html'
  })
  .state('stores',{
    url:'/stores',
    templateUrl:'templates/stores/stores.html'
  })
  // .state('sale',{
  //   url:'/sale',
  //   templateUrl:'templates/sale/sale.html'
  // })
  .state('saleOfMonth',{
    url:'/saleOfMonth',
    templateUrl:'templates/saleOfMonth/saleOfMonth.html'
  });


}

})();
