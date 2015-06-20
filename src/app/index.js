'use strict';

angular.module('bhendi', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ngMaterial'])
        .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
            $stateProvider
                    .state('home', {
                        templateUrl: 'app/components/navbar/navbar.html',
                        controller: 'NavbarCtrl',
                        abstract: true
                    })
                    .state('home.main', {
                        url: '/',
                        views: {
                            '': {
                                templateUrl: 'app/main/main.html',
                                controller: 'MainCtrl'
                            },
                            'heading': {
                                template: 'Dashboard'
                            }
                        }
                    });
            $urlRouterProvider.otherwise('/');
            $mdIconProvider
                    .icon('menu', '../assets/svg/menu.svg', 24);

            $mdThemingProvider.theme('default')
                    .primaryPalette('brown')
                    .accentPalette('red');
        })
        ;
