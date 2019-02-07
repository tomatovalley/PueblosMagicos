var Twitter = require('twitter');
var config = require('./keys.js');

var T = new Twitter(config.twitter);

var params = {
  q: '#nodejs',
  count: 1,
  result_type: 'recent',
  lang: 'en'
}
module.exports = twitter => {
    T.get('search/tweets', params, function(err, data, response) {
        if(!err){
        console.log(data);
        } else {
        console.log(err);
        }
    })

    return twitter
}





