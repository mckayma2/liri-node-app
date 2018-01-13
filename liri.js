
var keys = require ("./keys.js");

var Spotify = require('node-spotify-api');

var userImput = process.argv[2];


var spotify = new Spotify({
  id: keys.spotifyKey.clientId,
  secret: keys.spotifyKey.clientSecret
});
 

spotify.search({ type: 'artist', query: userImput, limit: 1}, function (err, response) {

  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
else{
//response = response.tracks.items[0].album.artists[0].name.toString();
console.log(response.artists);
};
});
