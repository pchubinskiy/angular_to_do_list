(function() {

  var app = angular.module('NowAndLater');

  app.directive('item', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl =  "/templates/_itemView.html";
    directive.scope = {
      thingtodo: '@'
    };

    return directive;
  });

})();
