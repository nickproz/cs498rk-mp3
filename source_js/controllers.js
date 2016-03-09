/* Sample Controller */

app.controller('listController', ['$scope', '$http', function($scope, $http) {

	/* Gets our movie data from data file */
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movieData = data;
	}).error(function (err) {
		console.log(err);
	})
	
	/* Creates our drop down menu choices and sets default one */
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
	
	/* Sets our reverse variable for ascending/descending buttons, initializes query search array */
	$scope.sortReverse  = 0;
	$scope.query = {'title':'','rank':'','imdbRating':''};
	
	/* Clear function to clear our search query when a different drop down is selected */
	$scope.clear = function()
	{
		$scope.query['title'] = '';
		$scope.query['rank'] = '';
		$scope.query['imdbRating'] = '';
	};
	
}]);

app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	
	/* Gets our movie data from data file */
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movieData = data;
	}).error(function (err) {
		console.log(err);
	})
	
	/* Variable to store movie rank parameter in URL */
	$scope.myRank = $routeParams.rank;
	
	/* Functions to "wrap around" the details view when we go before rank 1 or past rank 250 */
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
	
}]);

app.controller('galleryController', ['$scope', '$http', function($scope, $http) {
	
	/* Gets our movie data from data file */
	$http.get('data/imdb250.json').success(function(data) {
		$scope.movieData = data;
	}).error(function (err) {
		console.log(err);
	})
	
	/* Sets default starting genre, creates array with all possible genre choices */
	$scope.selectedGenre = "All";
	$scope.genres = ['All', 'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western'];
	
	/* Filter function for our genre buttons, returns true if current movie has selected genre */
	$scope.filterByGenres = function(movie) {
		if ($scope.selectedGenre == "All")
			return 1;
		
		return (movie.genre.indexOf($scope.selectedGenre) !== -1);
    };
	
	/* Function to update the 'active' genre button pressed */
	$scope.selectedIndex = 0;
	$scope.updateGenre = function (value, index)
	{
		$scope.selectedGenre = value;
		$scope.selectedIndex = index;
	}
	
}]);