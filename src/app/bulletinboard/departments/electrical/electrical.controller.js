'use strict';

angular.module('bhendi')
        .controller('electricalCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_electrical', {
                        url: '/electrical',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/electrical/electrical.html',
                                controller: 'electricalCtrl'
                            },
                            'heading': {
                                template: 'Electrical'
                            }
                        },
                    });
        });