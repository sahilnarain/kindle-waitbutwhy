var feed = require('feed-read');
var Epub = require('epub-gen');

var url = 'http://waitbutwhy.com/rss';

feed(url, function (err, rssFeed) {
  if (err) {
    console.log(err);
  }

  //var rss = rssFeed[0]; //Assume only 1 article is published in a day
  //var cutoff = new Date(new Date().setHours(0, 0, 0, 0));
  //if (rss.published < cutoff) {
  //  return;
  //} else {

  rssFeed.forEach(function (rss) {

    var options = {
      title: rss.title,
      author: 'Tim Urban',
      publisher: 'Sahil/Kindle',
      content: [{
        title: rss.title,
        data: rss.content
      }]
    };
    console.log(rss.title);

    new Epub(options, __dirname + '/' + rss.title + '.epub');
    console.log('Done');
  });
  // }
});