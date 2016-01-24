GDGCine.controller('ListCtrl', function($scope, $http, Movies, $ionicListDelegate) {
  
  $scope.data = {
    showDelete: false
  };
 
  $scope.movie = {
    name: 'Batman'
  }
  
  $scope.onItemDelete = function(index) {
    $scope.movies.splice(index, 1);
    $ionicListDelegate.$getByHandle('movies-list').closeOptionButtons()
  };
 
  $scope.searchMovieDB = function() {
 
    Movies.list($scope.movie.name, function(movies) {
      $scope.movies = movies;
    });
     
  };
  
  $scope.searchMovieDB();
  
});