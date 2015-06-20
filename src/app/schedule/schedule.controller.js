'use strict';

angular.module('bhendi')
        .controller('ScheduleCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.schedule', {
                        url: '/schedule',
                        views: {
                            '': {
                                templateUrl: 'app/schedule/schedule.html',
                                controller: 'ScheduleCtrl'
                            },
                            'heading': {
                                template: 'Schedule'
                            }
                        },
                    });
        });