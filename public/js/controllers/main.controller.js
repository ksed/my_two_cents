(function() {
  angular.module('my-two-cents')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService) {
    $scope.posts = PostService.getAll();
    $scope.create = createPost;
    $scope.delete = deletePost;

    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.posts = PostService.getAll();
    });

    function createPost(newPost) {
      PostService.create(newPost);
      $scope.newPost = {};
    }
    function deletePost(id) {
      PostService.delete(id);
      $scope.deleteId = '';
    }
  }
}());
