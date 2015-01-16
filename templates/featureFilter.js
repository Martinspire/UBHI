angular.module('Framework').filter('featureFilter', [

	function ()
	{
		return function (input)
		{
			return "more " + input;
		};
	}
]);
