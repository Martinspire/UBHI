angular.module('Framework')
	.controller('homeController', ['$scope', '$route', 'toastr',
		function ($scope, $route, toastr)
		{
			/* jshint validthis: true */
			var vm = this; //bind $scope to vm (viewmodel)

			vm.purchases = [
			{
				"date": "1 / 1 / 2015",
				"items": [
				{
					"name": "Melk, halfvol, 1L",
					"index": 70
				},
				{
					"name": "Brood, volkoren",
					"index": 50
				},
				{
					"name": "Eieren, dozijn",
					"index": 30
				},
				{
					"name": "Spinazie, 300gr",
					"index": 90
				},
				{
					"name": "Aardappelen, 2kg",
					"index": 60
				},
				{
					"name": "Gehakt, 1kg",
					"index": 50
				},
				{
					"name": "Appels 1kg",
					"index": 80
				}]
			},
			{
				"date": "2 / 1 / 2015",
				"items": [
				{
					"name": "Melk, halfvol, 1L",
					"index": 70
				},
				{
					"name": "Margarine",
					"index": 70
				},
				{
					"name": "Cornflakes",
					"index": 50
				},
				{
					"name": "Broccoli, 300gr",
					"index": 30
				},
				{
					"name": "Rijst, 1kg",
					"index": 75
				},
				{
					"name": "Tofu",
					"index": 75
				},
				{
					"name": "Cola 2L",
					"index": 5
				}],
			},
			{
				"date": "3 / 1 / 2015",
				"items": [
				{
					"name": "Snickers, 5 repen",
					"index": 3
				},
				{
					"name": "Red Bull, 2L",
					"index": 0
				},
				{
					"name": "Venco drop, 500gr",
					"index": 2
				},
				{
					"name": "Lays chips, 300gr",
					"index": 5
				},
				{
					"name": "Hamburgers",
					"index": 10
				},
				{
					"name": "Cola, 2L",
					"index": 10
				}]
			}];

			if ($route.current.params !== undefined && $route.current.params.state !== undefined && $route.current.params.state === '2')
			{
				vm.purchases.push(
				{
					"date": "4 / 1 / 2015",
					"items": [
					{
						"name": "Appels 1kg",
						"index": 80
					},
					{
						"name": "Appels 1kg",
						"index": 60
					}]
				});
			}
			else
			{

			}

			vm.besparingLabels = ['Huidige besparing', 'Te gaan'];
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
			}];

			var maandbedrag = 145.39;
			var marge = 15; //in %
			var kortingsEenheid = 0.01;

			vm.transactiesTotaal = (function ()
			{
				var totaal = 0;
				for (var t in vm.purchases)
				{
					for (var item in vm.purchases[t].items)
					{
						totaal += vm.purchases[t].items[item]['index'];
					}
				}
				return totaal.toFixed(2);
			})();

			vm.berekenBesparing = function (unit)
			{
				return ((maandbedrag * marge / 100) * (parseFloat(unit / 100) * kortingsEenheid))
					.toFixed(2);
			}

			vm.berekenTransactieBesparing = function (items)
			{
				var totaal = 0;
				for (var item in items)
				{
					totaal += items[item]['index'];
				}

				return vm.berekenBesparing(totaal);
			}

			vm.huidigeBesparing = vm.berekenBesparing(parseFloat(vm.transactiesTotaal))
			vm.huidigMaandbedrag = (maandbedrag - vm.huidigeBesparing)
				.toFixed(2);


			vm.korting = (parseFloat(vm.transactiesTotaal) * kortingsEenheid);
			vm.totaal = 100 - vm.korting;
			vm.besparingData = [vm.korting, vm.totaal];


			// toastr.info('Welcome to the framework\nYou can show errors here if you want.', 'Hi there',
			// {
			// 	closeButton: true
			// });
			//

		}
	]);
