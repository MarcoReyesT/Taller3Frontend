(function () {
  'use strict';

  angular
  .module('app')
  .component('usuario', {
    templateUrl: 'app/components/Usuario/Usuario.html',
    controller: usuarioCtrl,
    controllerAs: 'vm'
  });

  usuarioCtrl.$inject = ['UsuarioService'];

  function usuarioCtrl(UsuarioService) {
    var vm = this;
    UsuarioService.query().$promise.then(function (data) {
      vm.usuarios = data;
    });
  }
})();
