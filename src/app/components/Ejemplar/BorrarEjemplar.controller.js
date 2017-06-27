(function () {
  'use strict';
  angular.module('app')
  .controller('BorrarEjemplar.controller', deleteCtrl);

  deleteCtrl.$inject = ['EjemplarService', '$stateParams', '$log'];
  function deleteCtrl(EjemplarService, $stateParams, $log) {
    var vm = this;
    vm.location = 'update';
  }
})();
