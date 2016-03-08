/* Sample Controller */

app.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$http.get('data/imdb250.json').success(function(data) {
		$scope.movieData = data;
	}).error(function (err) {
		console.log(err);
	})
	
	$scope.drop = {};
	$scope.drop.down = 'title';
	$scope.dropdowns = [
		{'name': 'Title',
		 'value': 'title'},
		{'name': 'Rank',
		 'value': 'rank'},
		{'name': 'IMDB Rating',
		 'value': 'imdbRating'}
	];
	
	$scope.sortReverse  = 0;
	$scope.query = {'title':'','rank':'','imdbRating':''};
	$scope.clear = function()
	{
		$scope.query['title'] = '';
		$scope.query['rank'] = '';
		$scope.query['imdbRating'] = '';
	};
	
	$scope.myRank = $routeParams.rank;
	
	$scope.navWrapLeft = function()
	{
		if($scope.myRank <= 1)
			$scope.myRank = $scope.movieData[$scope.movieData.length - 1].rank + 1;
	};
	
	$scope.navWrapRight = function()
	{
		if ($scope.myRank >= $scope.movieData.length)
			$scope.myRank = 0;
	}
	
	$scope.selectedGenre = "All";
	$scope.genres = ['All', 'Action', 'Crime', 'Comedy', 'Drama', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western'];
	
	$scope.filterByGenres = function(movie) {
		if ($scope.selectedGenre == "All")
			return 1;
		
		return (movie.genre.indexOf($scope.selectedGenre) !== -1);
    };
	
	$scope.selectedIndex = 0;
	$scope.updateGenre = function (value, index)
	{
		$scope.selectedGenre = value;
		$scope.selectedIndex = index;
	}
	
}]);