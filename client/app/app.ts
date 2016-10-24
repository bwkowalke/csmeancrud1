'use strict';

angular.module('csmeancrudApp', [
  'csmeancrudApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ngTouch',
  'ui.grid',
  'ui.grid.pinning',
  'ui.grid.resizeColumns',
  'ui.grid.moveColumns',
  'ui.grid.selection',
  'ui.grid.exporter'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
