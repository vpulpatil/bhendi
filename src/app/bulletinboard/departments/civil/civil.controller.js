'use strict';

angular.module('bhendi')
        .controller('civilCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_civil', {
                        url: '/civil',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/civil/civil.html',
                                controller: 'civilCtrl'
                            },
                            'heading': {
                                template: 'Civil'
                            }
                        },
                    });
        });