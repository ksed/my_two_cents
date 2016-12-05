(function() {
  angular.module('two-cents')
    .controller("LogoutController", LogoutController);

  LogoutController.$inject = ['$scope'];

  function LogoutController($scope){
    $scope.logout = logout;
    function logout() {
      console.log('Logging out...');
    }
  }
}());
