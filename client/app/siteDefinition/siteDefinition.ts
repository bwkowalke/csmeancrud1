'use strict';

angular.module('csmeancrudApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('siteDefinition', {
        url: '/siteDefinition',
        template: '<site-definition></site-definition>'
      });
  });
