'use strict';

angular.module('bhendi')
        .controller('mechanicalCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_mechanical', {
                        url: '/mechanical',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/mechanical/mechanical.html',
                                controller: 'mechanicalCtrl'
                            },
                            'heading': {
                                template: 'Mechanical'
                            }
                        },
                    });
        });