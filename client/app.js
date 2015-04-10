(function (angular) {
  'use strict';
  angular.module('lrc-hack', [
    'ngTouch',
    'ngCookies',
    'ui.router'
 ,'lrc-hack.main'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/lrc-hack/main/notes');

    $stateProvider
      .state('lrc-hack', {
        url: '/lrc-hack',
        abstract: true,
        template: '<ui-view></ui-view>'
      });
  });
}(angular));



