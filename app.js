(function () {
    'use strict';
    angular
        .module('app', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'AchiController',
                templateUrl: 'app/achi/achi.view.html',
                controllerAs: 'vm'
            });
    }
})();