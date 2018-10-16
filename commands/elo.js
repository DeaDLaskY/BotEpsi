exports.run = (client, message, args) =>{
var lol = require('lol-js');
var lolClient = lol.client({
    apiKey: process.env.API,
     cache: lol.redisCache({host: 'localhost', port: 6379})
})
lolClient.getChampionById('euw', 53, {champData: ['all']}, function(err, data) {
    console.log("Found ", data.name);
  message.channel.send(data)
    lolClient.destroy();
});
  lolClient.getSummonerByName(args[0], name)
  console.log(name)
}