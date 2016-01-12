'use strict';

angular.module('bhendi')
        .controller('tnpcCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BBtnpc', {
                        url: '/tnpc',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/tnpc/tnpc.html',
                                controller: 'tnpcCtrl'
                            },
                            'heading': {
                                template: 'TNPC'
                            }
                        },
                    });
        });