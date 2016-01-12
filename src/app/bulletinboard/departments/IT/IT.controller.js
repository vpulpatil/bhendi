'use strict';

angular.module('bhendi')
        .controller('ITCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_IT', {
                        url: '/IT',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/IT/IT.html',
                                controller: 'ITCtrl'
                            },
                            'heading': {
                                template: 'IT'
                            }
                        },
                    });
        });