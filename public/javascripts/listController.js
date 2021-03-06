(function() {
  var app = angular.module('NowAndLater');

  app.controller('ListController', function($http) {
    this.newItem = { thingToDo: '' };

    var self = this;

    $http({
      method: 'GET',
      url: '/items'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.items = response.data;
    }, function errorCallback(response) {
      console.log('error', response);
    });

    this.addItem = function() {
      var self = this;

      $http({
        method: 'POST',
        url: '/items',
        data: {
          thingToDo: self.newItem.thingToDo
        }
      }).then(function successCallback(response) {
        console.log('success', response);

        self.items.push({
          thingToDo: self.newItem.thingToDo
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newItem.thingToDo = '';
    };

    this.deleteItem = function() {
      var self = this;

      $http({
        method: 'DELETE',
        url: '/items',
        data: {
          thingToDelete: self.checked.thingtodo
        }
      }).then(function successCallback(response) {
        console.log('success', response);
      }, function errorCallback(response) {
        console.log('error', response);
      });
    }

    return this;
  });
})();
