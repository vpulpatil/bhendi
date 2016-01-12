'use strict';

angular.module('bhendi')
        .controller('StudentSectionCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BBstudentSection', {
                        url: '/student_section',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/studentsSection/studentSection.html',
                                controller: 'StudentSectionCtrl'
                            },
                            'heading': {
                                template: 'Students Section'
                            }
                        },
                    });
        });