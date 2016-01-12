'use strict';

angular.module('bhendi')
        .controller('NavbarCtrl', function ($scope, $mdSidenav, $state, $mdBottomSheet, $q, $log, $mdToast) {
            $scope.notify = function (msg) {
                var toast = $mdToast.simple()
                        .content(msg)
                        .action('OK')
                        .highlightAction(false)
                        .position('bottom left');
                $mdToast.show(toast);
            };
            $scope.date = new Date();
            /**
             * First hide the bottomsheet IF visible, then
             * hide or Show the 'left' sideNav area
             */
            $scope.toggleMenu = function () {
                var pending = $mdBottomSheet.hide() || $q.when(true);

                pending.then(function () {
                    $mdSidenav('left').toggle();
                });
            };

            $scope.menu =
                    [
                        {
                            link: 'home.events',
                            title: 'Events'

                        },
                        {
                            link: 'home.schedule',
                            title: 'Time Table'

                        },
                        {
                            link: 'home.board',
                            title: 'Bulletin Board'
                        },

                    ];

            $scope.Events_subMenu =
                    [
                        {
                            link:'home.eventsWorkshops',
                            title:'Workshops'
                        },
                        {
                            link:'home.eventsGuestLectures',
                            title:'Guest Lectures'
                        }
                    ];

            $scope.TT_subMenu =
                    [
                        {
                            link:'home.TTexam',
                            title:'Exam TT'
                        },
                        {
                            link:'home.TTregular',
                            title:'Regular Lectures TT'
                        }
                    ];

            $scope.BB_subMenu =
                    [
                        {
                            link:'home.BBtnpc',
                            title:'TNPC'
                        },
                        {
                            link:'home.BBdept',
                            title:'Departmental Boards'
                        },
                        {
                            link:'home.BBstudentSection',
                            title:'Student Section'
                        },
                        {
                            link:'home.BBnccSports',
                            title:'NCC & Sports'
                        },
                        {
                            link:'home.BBexamSection',
                            title:'Examination Section'
                        },
                    ];

            $scope.BB_dept_subMenu =
                    [
                        {
                            link:'home.BB_dept_Computer',
                            title:'Computer Engineering'
                        },
                        {
                            link:'home.BB_dept_IT',
                            title:'Information Technology'
                        },
                       {
                            link:'home.BB_dept_mechanical',
                            title:'Mechanical Engineering'
                        },
                        {
                            link:'home.BB_dept_extc',
                            title:'EXTC'
                        },
                        {
                            link:'home.BB_dept_chemical',
                            title:'Chemical Engineering'
                        },
                        {
                            link:'home.BB_dept_petro',
                            title:'Petrochemical Engineering'
                        },
                        {
                            link:'home.BB_dept_electrical',
                            title:'Electrical Engineering'
                        },
                        {
                            link:'home.BB_dept_civil',
                            title:'Civil Engineering'
                        },
                    ];


            $scope.goto = function (state) {
                $log.debug(state);
                $state.go(state.link);
            };
        });
