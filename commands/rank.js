exports.run = (client, message, args) =>{
var lolapi = require('lolapi')('RGAPI-30a720d7-8836-41e1-9bf6-aa5cddb03a96', 'euw');
  lolapi.Champion.getAll({ freeToPlay: true }, function (error, champion) {
  // do something with free to play champions
});

}