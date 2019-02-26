var item = require('../models/item.js');
//text data for each object
var dogeText = "This is the doge meme, a common yet widely repsected and revered meme.  This meme has stood the test of time and is more or less a symbol or icon of memery itself.  Disregarding the meme stigma of \"overused memes\", the doge is still a widely used and loved meme format even though it is the most recognizable and most commonly used format to date.Most common uses of this meme format involve ironic or otherwise out of context quotes.  This format is generally used to represet one's confusion or complacence with a given situation or just to state a fact about the current state of reality.";
var shaggyText = "This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".";
var emojiText = "This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".";
var bText = "This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".";
var blbText = "This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".";
var patrickText = "This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".";

//follows the model set by item.js
var shaggy = item.newItem(1,"Shaggy","Modern",shaggyText,"4/5");
var emoji = item.newItem(2,"Emoji","Modern",emojiText,"4/5");
var b = item.newItem(3,"B","Modern",bText,"3/5");
var doge = item.newItem(4,"DOGE","Classic",dogeText,"5/5");
var blb = item.newItem(5,"Bad Luck Brian","Classic",blbText,"2/5");
var patrick = item.newItem(6,"Patrick/Spongebob","Classic",patrickText,"4/5");

//creates an array consisting of the objects created above
var getItems = function(){
  var array = [shaggy, emoji, b, doge, blb, patrick];
  return array;
}
//sifts through the array created above and finds a specific entry by comparing the id given and the code the objects have
var getItem = function(id){
  var array = getItems();
  for (var i = 0; i < array.length; i++){
    if(id == array[i].code){
      return array[i];
    }
  }
  return -1;
}

module.exports = {getItems, getItem};
