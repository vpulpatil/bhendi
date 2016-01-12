'use strict';

angular.module('bhendi')
        .controller('petroCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BB_dept_petro', {
                        url: '/petrochemical',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/departments/petrochemical/petrochemical.html',
                                controller: 'petroCtrl'
                            },
                            'heading': {
                                template: 'PetroChemical'
                            }
                        },
                    });
        });