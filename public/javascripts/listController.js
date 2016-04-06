(function() {
  var app = angular.module('NowAndLater');

  app.controller('ListController', function($http) {
    this.newItem = { question: '' };

    var self = this;

    $http({
      method: 'GET',
      url: '/items'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.items = response.data;
    }, function errorCallback(response) {

    });

    // this.cards = [
    //  { thingToDo: 'I couldn\'t complete my assignment because ________' },
    //  { thingToDo: 'I get by with a little help from ________' },
    //  { thingToDo: 'The field trip was completely ruined by ________' },
    //  { thingToDo: 'Kyle is a ________' },
    //  { thingToDo: 'What is my secret power?' }
    // ];

    this.addItem = function() {
      var self = this;

      $http({
        method: 'POST',
        url: '/items',
        data: {
          question: self.newItem.question
        }
      }).then(function successCallback(response) {

        self.items.push({
          question: self.newItem.question
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newItem.question = '';
    };

    return this;
  });
})();
