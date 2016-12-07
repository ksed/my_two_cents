(function() {
  angular.module('two-cents')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['$scope', 'AuthService'];

  function SignUpController($scope, AuthService){
    $scope.signup = signup;
    $scope.required = true;

    function signup(newUser) {
      console.log($scope.signupForm.input);
      AuthService.signup(newUser)
                .then(function() {
                  alert('Yay! Signed up!');
                })
                .catch(function() {
                  $scope.newUser = {};
                  alert('Bad Request: Try again...');
                });
    }
  }
}());
