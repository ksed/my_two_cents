(function() {
  angular.module('my-two-cents')
        .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http) {
    var posts = [];
    init();
    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      update: update,
      delete: deleteOne
    };

    function init() {

    }
    function getAll() {}
    function getOne(id) {}
    function create(newPost) {}
    function update(id, newPostData) {}
    function deleteOne(id) {}
  }
}());
