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

    // this.items = [
    //  { thingToDo: 'Ask my parents the same question' },
    //  { thingToDo: 'Go through sticky notes' },
    //  { thingToDo: 'Find Waldo' },
    //  { thingToDo: 'Check engine oil' }
    // ];

    // self.items = [
    //  { question: 'Ask my parents the same question' },
    //  { question: 'Go through sticky notes' },
    //  { question: 'Find Waldo' },
    //  { question: 'Check engine oil' }
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
