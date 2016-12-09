(function() {
  angular.module('two-cents')
    .controller("HomeController", HomeController);

  HomeController.$inject = ['$scope', 'PostService'];

  function HomeController($scope, PostService){
    $scope.recentPosts = [];

    $scope.$watch(function(){
      return PostService.getAll();
    }, function(){
      $scope.recentPosts = getMostRecentPosts(PostService.getAll());

    });

    function getMostRecentPosts(allPosts){
      
    }
  }
}());
