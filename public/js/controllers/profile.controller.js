(function() {
  angular.module('two-cents')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope', 'AuthService', '$location', 'PostService'];

  function ProfileController($scope, AuthService, $location, PostService){
    $scope.delete = deletePost;
    $scope.user = AuthService.currentUser();
    var userId = AuthService.userId();


    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts =  PostService.getPostsByUserId(userId);
    })


    function deletePost(id){
      console.log('Deleting the post');
      PostService.delete(id);
    }
  }
}());
