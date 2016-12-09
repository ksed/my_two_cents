(function() {
  angular.module('two-cents')
    .run(AuthConfig);

  AuthConfig.$inject = ['$rootScope', '$location', 'AuthService'];

  function AuthConfig($rootScope, $location, AuthService){
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute){
      if(nextRoute.access.restricted && !AuthService.isLoggedIn()){
        $location.path('/'); //go home if you aren't logged and try to go to a protected route
      }
    });
  }
}());
