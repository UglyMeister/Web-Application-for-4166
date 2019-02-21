var item = require('item.js');

var doge = new item;
doge.setCode(4);
doge.setName("DOGE");
doge.setRating("5/5");
doge.setCategory("Classic");
doge.setDescription("<p>&nbsp;&nbsp;&nbsp;This is the doge meme, a common yet widely repsected and revered meme.  This meme has stood the test of time and is more or less a symbol or icon of memery itself.  Disregarding the meme stigma of \"overused memes\", the doge is still a widely used and loved meme format even though it is the most recognizable and most commonly used format to date.</p><p>&nbsp;&nbsp;&nbsp;Most common uses of this meme format involve ironic or otherwise out of context quotes.  This format is generally used to represet one's confusion or complacence with a given situation or just to state a fact about the current state of reality.</p>");

var shaggy = new item;
shaggy.setCode(1);
shaggy.setName("Shaggy");
shaggy.setRating("4/5");
shaggy.setCategory("Modern");
shaggy.setDescription("<p>&nbsp;&nbsp;&nbsp;This is the shaggy meme.  Shaggy is a meme format that exhibits a high amount of irony in that shaggy in the meme is supposedly the strongest being to have ever existed when his appearance is that of a small-bodied individual.  Shaggy memes usually include phrases about Shaggy's unlimited power, for example: \"The dinosaurs going extinct was due to Shaggy exhibiting .1% of his power\".</p>");

var emoji = new item;
emoji.setCode(2);
emoji.setName("Emoji");
emoji.setRating("5/5");
emoji.setCategory("Modern");
emoji.setDescription("<p>&nbsp;&nbsp;&nbsp;</p>");

var b = new item;
b.setCode(3);
b.setName("B");
b.setRating("3/5");
b.setCategory("Modern");
b.setDescription("<p>&nbsp;&nbsp;&nbsp;</p>");

var blb = new item;
blb.setCode(5);
blb.setName("Bad Luck Brian");
blb.setRating("3/5");
blb.setCategory("Classic");
blb.setDescription("<p>&nbsp;&nbsp;&nbsp;</p>");

var patrick = new item;
patrick.setCode(6);
patrick.setName("Bad Luck Brian");
patrick.setRating("3/5");
patrick.setCategory("Classic");
patrick.setDescription("<p>&nbsp;&nbsp;&nbsp;</p>");

module.exports = {shaggy, emoji, b, doge, blb, patrick};
