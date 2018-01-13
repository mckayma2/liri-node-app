


var Spotify = require('node-spotify-api');

var userImput = process.argv[2];


var spotify = new Spotify({
  id: '2a974e81e3694af08ad4d0fb94a021f9',
  secret: '2b8265c58b2149bd9d8b58b2a629f2e6'
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
