'use strict';

angular.module('bhendi')
        .controller('nccSportsCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BBnccSports', {
                        url: '/ncc_sports',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/nccSports/nccSports.html',
                                controller: 'nccSportsCtrl'
                            },
                            'heading': {
                                template: 'NCC and Sports'
                            }
                        },
                    });
        });