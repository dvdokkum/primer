var primer = angular.module('primer', ['spotify']);
console.log("test");

primer.controller('test', function(Spotify) {

Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
  console.log(data);
});

});

