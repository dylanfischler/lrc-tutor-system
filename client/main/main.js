(function (angular) {
  "use strict";
  angular.module('lrc-hack.main', ['ui.router', 'lrc-hack.main.note'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('lrc-hack.main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/main.tpl.html'
      });
  });
}(angular));
