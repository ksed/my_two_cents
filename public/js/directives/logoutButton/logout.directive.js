(function() {
  angular.module('two-cents')
    .directive('logoutButton', LogoutButtonDirective);

  LogoutButtonDirective.$inject = [];

  function LogoutButtonDirective(){
    return {
      restrict: 'EA', //this makes available as a tag or attribute,
      scope: {}, //isolate scope -- keeps parent scope from contaminating the directive
      templateUrl: 'js/directives/logoutButton/logout.view.html',
      controller: 'LogoutController'
    };
  }
}());
