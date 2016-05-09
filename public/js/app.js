//create primer angular module
var primer = angular.module('primer', ['spotify']);

//set auth configs for spotify
primer.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('de8f8891bad644ef880053577e18cd35');
  SpotifyProvider.setRedirectUri('http://localhost:3000/callback.html');
  SpotifyProvider.setScope('user-top-read user-library-read user-follow-read playlist-read-private');
});

primer.controller('main', ['$scope', 'Spotify', function($scope, Spotify) {

	Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
  	console.log(data);
	});

	$scope.login = function() {
		Spotify.login();
	};

}]);