var app = angular.module('mp3',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/gallery', {
			templateUrl: 'partials/gallery.html',
			controller: 'mainController'
		})
		.when('/list', {
			templateUrl: 'partials/list.html',
			controller: 'mainController'
		})
		.when('/details/:rank', {
			templateUrl: 'partials/details.html',
			controller: 'mainController'			
		})
		.otherwise({
			redirectTo: '/list'
		});
}]);