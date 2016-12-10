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
      return allPosts.sort(function(first, second) {
        return first.postDate > second.postDate;
      }).slice(0, 5);
    }
  }
}());
