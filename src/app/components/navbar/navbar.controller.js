'use strict';

angular.module('bhendi')
        .controller('NavbarCtrl', function ($scope, $mdSidenav, $state, $mdBottomSheet, $q, $log) {
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
                        }
                    ];

            $scope.goto = function (state) {
                $log.debug(state);
                $state.go(state.link);
            };
        });
