(function () {
  'use strict';

  angular
  .module('app')
  .service('EstadoService', estadoService);

  estadoService.$inject = ['$resource'];

  function estadoService($resource) {
    return $resource('http://localhost:8000/api/estados/:id', {id: '@id'});
  }
})();
