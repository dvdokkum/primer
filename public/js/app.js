//create primer angular module
var primer = angular.module('primer', ['spotify']);

//set auth configs for spotify
primer.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('de8f8891bad644ef880053577e18cd35');
  SpotifyProvider.setRedirectUri('http://localhost:3000/callback.html');
  SpotifyProvider.setScope('user-top-read user-library-read user-follow-read playlist-read-private');
	
	//get token from localstorage on init if present
	setToken = function() {
		token = localStorage.getItem('spotify-token');
		if (token !== null) {
			SpotifyProvider.setAuthToken(token);
		};
	}

	setToken();

});

primer.controller('main', ['$scope', 'Spotify', function($scope, Spotify) {

	check_login = function() {
	 if (token !== null) {
		Spotify.getCurrentUser().then(function (data) {
			user = data;
			console.log(user);
			if (user.id !== undefined) {
			console.log(user.id);
			$scope.user_name = user.id;
			$scope.not_logged_in = {'display':'none'};
			$scope.logged_in = {'display':'inline'};
			} else {$scope.logged_in = {'display':'none'}};		
	})} else {$scope.logged_in = {'display':'none'}};
	};

	check_login();

	$scope.login = function() {
		Spotify.login().then(function() {
			setToken();
			check_login();
		});
	};

	$scope.topTracks = function() {
		Spotify.getUserTopArtists({ limit: 50 }).then(function (data) {
  		console.log(data);
		});
	};
}]);