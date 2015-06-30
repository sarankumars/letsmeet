angular.module('letsMeetApp.controllers', [])

.controller('EventCtrl', ['$scope', function($scope) {

    $scope.formData = {};
    $scope.allEvents = [];  // Array that will hold all allEvents      
    $scope.failed = '';    // A message displayed if the form fails to submit

    // For each item in local storage...
    for( item in localStorage ) {
        // Parse the JSON string and add it to allEvents array
        var newItem = JSON.parse( localStorage[item] );
        $scope.allEvents.push( newItem );
    }

    // Submit new contact with values from the form fields, then reset values of the fields
    $scope.addEventFunc = function() {   

        // Angular has special directives for forms, and a form name attribute allows that form to be accessed through the scope, which is where we get '$scope.addContactForm'
        // Read more here: docs.angularjs.org/api/ng/directive/form

        // If all required fields are complete 

        //if( !$scope.addEventForm.$error.required ) { 


            // Remove warning
            $scope.failed = '';

	    //window.alert("Alert - " + $scope.formData.newEventName);
            //console.log($scope.formData.newEventName);
            // Store event data in an object         
            var newEvent = {
                id: localStorage.length,
                eventName: $scope.formData.newEventName,
                eventLocation: $scope.formData.newEventLocation,
                eventDate: $scope.formData.newEventDate,
                eventTime: $scope.formData.newEventTime
            };  

            // Add event object to localStorage as the value to a new property
            localStorage.setItem( 'item' + localStorage.length, JSON.stringify(newEvent) );

            // Add new event object to the model by adding it to the allEvents array
            $scope.allEvents.push( newEvent );

            // Reset the inputs values for the form
            $scope.formData.newEventName = '';
            $scope.formData.newEventLocation = '';
            $scope.formData.newEventDate = '';
            $scope.formData.newEventTime = '';
        //} else {
        //    // Add warning
        //    $scope.failed = 'All fields must be filled.';
        //}

    };

    $scope.deleteEvent = function(index, item) {

        // index param is an ngRepeat variable
        // Read more here: docs.angularjs.org/api/ng/directive/ngRepeat

        // Delete item from localStorage
        localStorage.removeItem( 'item' + item.id );

        // Remove item from the allEvents array
        $scope.allEvents.splice( index, 1 );

    }
}])

.controller('DashCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.events = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  }
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('GroupsCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
