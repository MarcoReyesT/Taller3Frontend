(function () {
  'use strict';

  angular
  .module('app')
  .service('GeneroService', generoService);

  generoService.$inject = ['$resource'];

  function generoService($resource) {
    return $resource('http://localhost:8000/api/generos/:id', {id: '@id'});
  }
})();
