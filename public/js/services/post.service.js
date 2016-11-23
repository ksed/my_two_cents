(function() {
  angular.module('my-two-cents')
        .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http) {
    var posts = [];
    var baseUrl = '/posts/';
    init();
    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deleteOne
    };

    function init() {
      $http.get(baseUrl)
          .then(function(res) {
            posts = res.data.posts;
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    function getAll() {
      return posts;
    }
    function getOne(id) {
      $http.get(baseUrl + id)
          .then(function(res) {
            posts = res.data;
          })
          .catch(function(res) {
            console.log(err);
          });
    }
    function create(newPost) {
      $http.post(baseUrl, newPost)
          .then(function(res) {
            init();
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    function update(id, newPostData) {
      $http.put(baseUrl + id, newPostData)
          .then(function(res) {
            init();
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    function deleteOne(id) {
      $http.delete(baseUrl + id)
          .then(function(res) {
            init();
          })
          .catch(function(err) {
            console.log(err);
          });
    }
  }
}());
