exports.run = (client, message, args) =>{
var lol = require('lol-js');
var lolClient = lol.client({
    apiKey: process.env.API
})
lolClient.getChampionById('na', 53, {champData: ['all']}, function(err, data) {
    console.log("Found ", data.name);
  message.channel.send(data)
    lolClient.destroy();
});
}