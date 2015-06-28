angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    event: 'Soccer',
    location: 'Bill Barber Park',
    date: '07/25/2015',
    time: '06:00 PM',
    icon: 'img/events/soccer.png'
  }, {
    id: 1,
    event: 'Gym',
    location: 'LA Fitness',
    date: '07/26/2015',
    time: '07:00 AM',
    icon: 'img/events/gym.png'
  },{
    id: 2,
    event: 'Swimming',
    location: 'San Leon Pool',
    date: '07/27/2015',
    time: '02:00 PM',
    icon: 'img/events/swimming.png'
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
