angular.module('Framework')
	.controller('homeController', ['$scope', 'toastr',
		function ($scope, toastr)
		{
			/* jshint validthis: true */
			var vm = this; //bind $scope to vm (viewmodel)
			vm.someBoolean = false;

			vm.someFunction = function ()
			{
				return 5;
			};

			vm.purchases = [
			{
				"date": "1 / 1 / 2015",
				"items": [
				{
					"name": "Appels 1kg",
					"index": 80
				}]
			}]

			// toastr.info('Welcome to the framework\nYou can show errors here if you want.', 'Hi there',
			// {
			// 	closeButton: true
			// });
		}
	]);
