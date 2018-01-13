
var keys = require ("./keys.js");
var Spotify = require('node-spotify-api');

//sudo i would pust an if statement to determin which api to use based on the user imput 
// process.argv[2] would be api and process.argv[3] querry
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

