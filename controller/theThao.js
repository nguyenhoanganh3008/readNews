/**
 * Read News Website
 * author : suonran
 * version : 1.0.0
 * date : 12/06/2020
 */
let Parser = require('rss-parser');
let parser = new Parser();

module.exports.Open = function (req, res) {
  (async () => {

    let feed = await parser.parseURL('https://vnexpress.net/rss/the-thao.rss');
    console.log(feed.title);

    feed.items.forEach(item => {
      console.log(item)
    });
    res.render('./theThao',{datas : feed.items});
  })();
}