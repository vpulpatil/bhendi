'use strict';

angular.module('bhendi')
  .controller('NavbarCtrl',function ($scope,$mdSidenav,$mdDialog) {
    $scope.date = new Date();



    $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
    };


    $scope.menu =
    [
      {
        link : '',
        title: 'Events'

      },
      {
        link : '',
        title: 'Time Table'

      },
      {
        link : '',
        title: 'Bulletin Board'
      }
    ];

    $scope.events = [
      {
        what: 'Workshop on SDLC',
        who: 'by Kaushal Sir',
        when: '14/07/2015 at 9:00 AM'

      },
      {
        what: 'Talk on Introduction to Linux',
        who: 'by Rajhans',
        when: '18/07/2015  at 11:00AM'

      },
      {
        what: 'Workshop on Android app',
        who: 'by Krishna and Rajhans ',
        when: '24/07/2015 at 10:00AM'

      },
      {
        what: 'Seminar on Machine Learning',
        who: 'by Abhijeet',
        when: '30/07/2015 at 11:00AM'

      },

      {
        what: 'Workshop on Nodejs',
        who: 'by Manisha',
        when: '03/08/2015 at 10:00AM'

      }

      ];

      $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>Event Name</label> <input ng-model="user.eventName" placeholder="Event Name"> </md-input-container> <md-input-container flex> <label>Event Type</label> <input ng-model="theMax" placeholder="Event Type"> </md-input-container> </div> <md-input-container flex> <label>Guest Name</label> <input ng-model="user.guestname" > </md-input-container> <div layout layout-sm="column"><md-input-container flex> <label>Date</label> <input ng-model="user.date" placeholder="01/01/2015"> </md-input-container> <md-input-container flex> <label>Venue</label> <input ng-model="user.venue"> </md-input-container> <md-input-container flex> <label>Fees</label> <input ng-model="user.fees" placeholder="Free/Paid"> </md-input-container> </div> <md-input-container flex> <label>Description</label> <textarea ng-model="user.description" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  }
 };






  });
