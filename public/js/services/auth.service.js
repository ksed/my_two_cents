(function() {
  angular.module('two-cents')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$window'];

  function AuthService($http, $window){
    var localStorage = $window.localStorage;
    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      signup: signup,
      login: login,
      logout: logout
    };

    function currentUser(){
      if(isLoggedIn()) {
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return {
          email: payload.email
        };
      } else {
        return null;
      }
    }
    function saveToken(token){
      localStorage['two-cents-token'] = token;
    }
    function getToken(){
      return localStorage['two-cents-token'];
    }
    function isLoggedIn(){
      var token = getToken();
      var payload;
      if(token) {
        payload = token.split('.')[1];
        payload = $window.atob(payload); // unserializes payload to string json
        payload = JSON.parse(payload);

        return payload.exp > Date.now()/1000; // compares exp-date to right now.
      } else {
        return false;
      }
    }
    function signup(user){
      return $http.post('/users/signup', user);
    }
    function login(user){
      return $http.post('/users/login', user)
                  .then(function(res) {
                    var token = res.data.token;
                    saveToken(token);
                  });
    }
    function logout(){
      localStorage.removeItem('two-cents-token');
    }
  }
}());
