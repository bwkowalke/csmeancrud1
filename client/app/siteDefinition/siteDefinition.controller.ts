'use strict';

(function(){

class SiteDefinitionComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('csmeancrudApp')
  .component('siteDefinition', {
    templateUrl: 'app/siteDefinition/siteDefinition.html',
    controller: SiteDefinitionComponent,
    controllerAs: 'siteDefinitionCtrl'
  });

})();
