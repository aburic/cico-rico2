(function(){
  'use strict';

angular.module('contact')

.component('contactComponent', {
  templateUrl: 'templates/contact/contact.html',
  bindings: {
    contactItem: '<'
  },
});

})();
