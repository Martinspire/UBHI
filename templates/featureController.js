angular.module('Framework').controller('templateController', ['$scope',
	function ($scope)
	{
		/* jshint validthis: true */
		var vm = this; //bind $scope to vm (viewmodel)
		vm.someBoolean = false;

		vm.someFunction = function(){
			return 5;
		};

	}
]);
