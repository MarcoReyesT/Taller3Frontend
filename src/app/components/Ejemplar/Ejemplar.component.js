(function () {
  'use strict';

  angular
  .module('app')
  .component('ejemplar', {
    templateUrl: 'app/components/Ejemplar/Ejemplar.html',
    controller: ejemplarCtrl,
    controllerAs: 'vm'
  });

  ejemplarCtrl.$inject = ['EjemplarService'];

  function ejemplarCtrl(EjemplarService) {
    var vm = this;
    EjemplarService.query().$promise.then(function (data) {
      vm.ejemplares = data;
    });
  }
})();
