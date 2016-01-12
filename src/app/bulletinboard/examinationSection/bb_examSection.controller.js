'use strict';

angular.module('bhendi')
        .controller('ExamSectionCtrl', function ($scope) {
            
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.BBexamSection', {
                        url: '/exam_section',
                        views: {
                            '': {
                                templateUrl: 'app/bulletinboard/examinationSection/bb_examSection.html',
                                controller: 'ExamSectionCtrl'
                            },
                            'heading': {
                                template: 'Exam Section'
                            }
                        },
                    });
        });