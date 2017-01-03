(function(){
  'use strict';

angular.module('home')
.directive('aboutUsDirective', aboutUsDirective);

function aboutUsDirective(){
  var ddo={
    templateUrl:'templates/about/about.html'
  }
  return ddo;
}
})();
