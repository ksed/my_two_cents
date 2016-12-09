(function() {
  angular.module('two-cents')
    .controller('EditController', EditController);

  EditController.$inject = ['$scope',
                            '$location',
                            'AuthService',
                            'PostService',
                            '$routeParams'];

  function EditController($scope, $location, AuthService, PostService, $routeParams){
    $scope.save = save;
    PostService.getOne($routeParams.postId);
    $scope.required = true;
    $scope.$watch(function(){
      return PostService.getSelectedPost();
    }, function(){
      $scope.post = PostService.getSelectedPost();
    });


    function save(post){
      if(AuthService.userId() && post){
        console.log('Updating post');
        PostService.update(post._id, post)
                   .then(function(){
                     $location.path('/profile/' + AuthService.currentUser().email);
                   })
                   .catch(function(err){
                     console.log(err);
                   });;
      } else {
        $location.path('/edit/' + $routeParams.postId);
      }
    }
  }
}());
