'use strict';

angular.module('bhendi')
        .controller('computerCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_Computer', {
                        url: '/computer',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/computer/computer.html',
                                controller: 'computerCtrl'
                            },
                            'heading': {
                                template: 'Computer'
                            }
                        },
                    });
        });