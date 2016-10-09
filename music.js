// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name) {
  this.name = name;
  this.songs = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(song, artist) {
  this.title = song;
  this.artist = artist;
  this.playCount = 0;
  this. artist.songs.push(song);
}

Song.prototype.play = function (){
  return this.playCount++;
}
// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");

var jump = new Song("Jump!", vanHalen);
jump.play();
