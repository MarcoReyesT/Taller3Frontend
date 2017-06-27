(function () {
  'use strict';

  angular
  .module('app')
  .service('AutorService', autorService);

  autorService.$inject = ['$resource'];

  function autorService($resource) {
    return $resource('http://localhost:8000/api/autores/:id', {id: '@id'});
  }
})();
