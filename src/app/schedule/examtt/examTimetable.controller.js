'use strict';

angular.module('bhendi')
        .controller('ExamTTCtrl', function ($scope) {
         
         var tabs = [
          { title: 'B. Tech.'},
          { title: 'M. Tech.'}, 
          { title: 'Ph. D.'}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
      
        })
        .config(function ($stateProvider) {
            $stateProvider
                    .state('home.TTexam', {
                        url: '/ExamTimetable',
                        views: {
                            '': {
                                templateUrl: 'app/schedule/examtt/examTimetable.html',
                                controller: 'ExamTTCtrl'
                            },
                            'heading': {
                                template: 'Exam Timetable'
                            }
                        },
                    });
        });