(function () {
  'use strict';
  angular.module('app')
  .controller('ActualizarEjemplar.controller', updateCtrl);

  updateCtrl.$inject = ['EjemplarService', '$stateParams', '$log'];
  function updateCtrl(EjemplarService, $stateParams, $log) {
    var vm = this;
    vm.location = 'update';
    $log.debug($stateParams.id);
    vm.ejemplarForm = EjemplarService.get({id: $stateParams.id});
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
  }
})();
