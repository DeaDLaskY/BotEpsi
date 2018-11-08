exports.run = (client, message, args) =>{
var lol = require('lol-js');
var lolClient = lol.client({
    apiKey: 'RGAPI-30a720d7-8836-41e1-9bf6-aa5cddb03a96',
    cache: lol.redisCache({host: '192.168.1.2', port: 6379})
});
lolClient.getChampionById('na', 53, {champData: ['all']}, function(err, data) {
    console.log("Found ", data.name);
    lolClient.destroy();
});

}