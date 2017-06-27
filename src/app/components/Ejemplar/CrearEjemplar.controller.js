(function () {
  'use strict';
  angular.module('app')
  .controller('CrearEjemplar.controller', store);

  store.$inject = ['EjemplarService', '$log', 'UsuarioService', 'EstadoService', 'LibroService'];

  function store(EjemplarService, $log, UsuarioService, EstadoService, LibroService) {
    var vm = this;
    vm.location = 'store';
    vm.ejemplarForm = {
      fecha_prestamo: null,
      fecha_devolucion: null,
      libro_id: null,
      estado_id: null,
      usuario_id: null
    };
    vm.libros = LibroService.query();
    vm.estados = EstadoService.query();
    vm.usuarios = UsuarioService.query();
    vm.ejemplares = null;
    EjemplarService.query().$promise.then(success, error);
    vm.semanticAction = function (form) {
      console.log(form);
      form.libro_id = form.libro_id.id;
      form.estado_id = form.estado_id.id;
      form.usuario_id = form.usuario_id.id;

      console.log(form);
      EjemplarService.save(form, success, error);
    };
    // Private functions
    function success(data) {
      vm.ejemplares = data;
      $log.debug(vm.ejemplares);
    }
    function error(data) {
      $log.debug(data);
    }
    function convertDate(str) {
      var date = new Date(str);
      var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
      var day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join('-');
    }
  }
})();
