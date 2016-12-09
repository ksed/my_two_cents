(function() {
  angular.module('two-cents')
    .controller('CreateController', CreateController);

  CreateController.$inject = ['$scope', 'PostService', '$location', 'AuthService'];

  function CreateController($scope, PostService, $location, AuthService){
    $scope.create = create;
    $scope.post = {};
    $scope.required = true;

    function create(post){
      if(AuthService.userId() && post){
        post.author = AuthService.userId();
        PostService.create(post);
        $location.path('/profile');
      } else {
        console.log('Fill our required fields');
        $location.path('/create');
      }
    }
  }
}());
