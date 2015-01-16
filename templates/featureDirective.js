angular.module('Framework').directive('popup', [

	function ()
	{
		return {
			restrict: 'E',
			replace: 'true',
			transclude: 'true',
			template: '<div class="hello">Hello World</div>',
			link: function (scope, element, attrs)
			{
				//something
			}
		};
	}
]);
