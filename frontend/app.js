angular.module('Framework', [
	'ngRoute',
	'ngSanitize',
	'ngResource',
	'ngStorage',
	'toastr',
	'chart.js'
]);



angular.module('Framework')
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider)
		{
			$routeProvider
				.when('/',
				{
					templateUrl: 'login/login.html',
					controller: 'loginController',
					controllerAs: 'login'
				})
				.when('/home',
				{
					templateUrl: 'home/home.html',
					controller: 'homeController',
					controllerAs: 'home'
				})
				.when('/register',
				{
					templateUrl: 'register/register.html',
					controller: 'registerController',
					controllerAs: 'register'
				})
				.when('/details',
				{
					templateUrl: 'details/details.html',
					controller: 'detailsController',
					controllerAs: 'details'
				})
				.otherwise(
				{
					redirectTo: '/home'
				});

			//$locationProvider.html5Mode(true);
		}
	]);
