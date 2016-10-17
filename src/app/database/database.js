(function(angular, smi2) {
	'use strict';

	angular.module(smi2.app.name).controller('DatabaseController', DatabaseController);
	DatabaseController.$inject = ['$scope', '$rootScope', '$stateParams', 'API', '$filter'];

	/**
	 * @ngdoc controller
	 * @name smi2.controller:DatabaseController
	 * @description Контроллер оботстраницы с 1 бд
	 */
	function DatabaseController($scope, $rootScope, $stateParams, API, $filter) {
		$rootScope.breadcrumbs = [{
			text: $filter('translate')('База') + ' ' + $stateParams.dbName,
			link: 'database',
			params: $stateParams
		}];

		$scope.vars = {
			tables: []
		};

		API.query('show tables from ' + $stateParams.dbName).then(function(data) {
			$scope.vars.tables = data.data;
		});
	}
})(angular, smi2);
