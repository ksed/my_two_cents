(function() {
  angular.module('two-cents')
      .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var posts = [];
    var selectedPost;
    var baseUrl = '/posts/';
    init();
    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deleteOne,
      getSelectedPost: getSelectedPost,
      getPostsByUserId: getPostsByUserId
    };

    function getSelectedPost(){
      return selectedPost;
    }
    function init(){
      $http.get(baseUrl)
          .then(function(response){
            posts = response.data.posts;
          })
          .catch(function(err){
            console.log(err);
          });
    }
    function getAll(){
      return posts;
    }
    function getOne(id){
      $http.get(baseUrl + id)
          .then(function(response){
            selectedPost = response.data.post[0]; //forewarning: if the get returns an empty array, this will cause an error
          })
          .catch(function(error){
            console.log(error);
          });
    }
    function create(newPost){
      $http.post(baseUrl, newPost)
          .then(function(response){
            init();
          })
          .catch(function(error){
            console.log(error);
          });
    }
    function update(id, newPostData){
      return $http.put(baseUrl + id, newPostData)
          .then(function(response){
            init();
          });

    }
    function deleteOne(id){
      $http.delete(baseUrl + id)
          .then(function(response){
            init();
          })
          .catch(function(err){
            console.log(err);
          });
    }
    function getPostsByUserId(userId){
      return posts;
    }
  }
}());
