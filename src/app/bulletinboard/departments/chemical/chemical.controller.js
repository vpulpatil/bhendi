'use strict';

angular.module('bhendi')
        .controller('chemicalCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_chemical', {
                        url: '/chemical',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/chemical/chemical.html',
                                controller: 'chemicalCtrl'
                            },
                            'heading': {
                                template: 'Chemical'
                            }
                        },
                    });
        });