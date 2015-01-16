angular.module('Framework', [
	'ngRoute',
	'ngSanitize',
	'ngResource',
	'ngStorage',
	'toastr'
]);
angular.module('Framework')
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider)
		{
			$routeProvider
				.when('/',
				{
					templateUrl: 'home/home.html',
					controller: 'homeController',
					controllerAs: 'home'
				})
				.otherwise(
				{
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
		}
	]);
