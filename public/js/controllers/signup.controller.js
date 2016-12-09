(function() {
  angular.module('two-cents')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'AuthService', '$location'];

  function SignUpController($scope, AuthService, $location){
    $scope.signup = signup;
    $scope.required = true;

    function signup(newUser){
      AuthService.signup(newUser)
          .then(function(){
            $location.path('/login');
          })
          .catch(function(){
            $scope.newUser = {};
            $location.path('/signup');
          });
    }
  }
}());
