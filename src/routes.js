(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      })
      .state('usuario', {
        url: '/usuario',
        component: 'usuario'
      })
      .state('ejemplar', {
        url: '/ejemplar',
        component: 'ejemplar'
      })
      .state('libro', {
        url: '/libro',
        component: 'libro'
      })
      .state('crearEjemplar', {
        url: '/ejemplar/crear',
        controller: 'CrearEjemplar.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Ejemplar/FormEjemplar.html'
      })
      .state('verEjemplar', {
        url: '/ejemplar/:id/ver',
        controller: 'VerEjemplar.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Ejemplar/FormEjemplar.html'
      })
      .state('borrarEjemplar', {
        url: '/ejemplar/:id/borrar',
        controller: 'BorrarEjemplar.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Ejemplar/FormEjemplar.html'
      })
      .state('actualizarEjemplar', {
        url: '/ejemplar/:id/actualizar',
        controller: 'ActualizarEjemplar.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/Ejemplar/FormEjemplar.html'
      });
  }
})();
