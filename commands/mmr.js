exports.run = (client, message, args) =>{
  var mmr = require('opgg-mmr');
 
mmr('TheLaskY', function(error, response) {
  if (error) {
    throw error;
  }
 
  console.log(response);
  // => {
  // =>   log: '',
  // =>   tip: {
  // =>     status: '',
  // =>     leagueAverage: '',
  // =>     notice: ''
  // =>   },
  // =>   mmr: '2,669',
  // =>   class: ''
  // => }
});
}