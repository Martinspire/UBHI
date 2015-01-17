angular.module('Framework')
	.controller('homeController', ['$scope', 'toastr',
		function ($scope, toastr)
		{
			/* jshint validthis: true */
			var vm = this; //bind $scope to vm (viewmodel)

			vm.purchases = [
			{
				"date": "1 / 1 / 2015",
				"items": [
				{
					"name": "Appels 1kg",
					"index": 80
				}]
			}]
			vm.besparingLabels = ['Huidige besparing', 'Te gaan'];
			vm.besparingData = [63.25, 26.75];
			vm.besparingOpties = {
				segmentShowStroke: false,
				percentageInnerCutout: 75,
				responsive: false,
			};
			vm.besparingKleuren = [
			{ // orange
				fillColor: "#009fda",
				strokeColor: "#009fda",
				pointColor: "#009fda",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "#009fda"
			},
			{ // yellow
				fillColor: "rgba(0,0,0,0)",
				strokeColor: "rgba(0,0,0,0)",
				pointColor: "rgba(0,0,0,0)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(0,0,0,0)"
			}]

			// toastr.info('Welcome to the framework\nYou can show errors here if you want.', 'Hi there',
			// {
			// 	closeButton: true
			// });
		}
	]);
