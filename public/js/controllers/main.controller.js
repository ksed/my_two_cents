(function() {
  angular.module('my-two-cents')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'PostService'];

  function MainController($scope, PostService) {
    $scope.posts = PostService.getAll();
    $scope.create = createPost;
    $scope.delete = deletePost;
    $scope.getOne = getPost;
    $scope.getSelectedPost = getSelectedPost;
    $scope.update = updatePost;

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
    function getPost(id) {
      PostService.getOne(id);
      $scope.getId = '';
    }
    function getSelectedPost() {
      $scope.selectedPost = PostService.getSelectedPost();
    }
    function updatePost(id, updatedPost) {
      PostService.update(id, updatedPost);
      $scope.updateId = '';
      $scope.updatedPost = {};
    }
  }
}());
