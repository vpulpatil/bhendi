'use strict';

angular.module('bhendi')
        .controller('extcCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_extc', {
                        url: '/extc',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/extc/extc.html',
                                controller: 'extcCtrl'
                            },
                            'heading': {
                                template: 'EXTC'
                            }
                        },
                    });
        });