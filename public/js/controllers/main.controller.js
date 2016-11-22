(function() {
  angular.module('my-two-cents')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService) {
    $scope.text = '';
    $scope.popUp = function popUp() {
      alert('You clicked me!');
    };
  }
}());
