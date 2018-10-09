exports.run = async(client, message, args) =>{
  const helpmusique = new client.RichEmbed()
  
  .title = "Commandes Musique"
  .setColor = "#f442f4"
  .addField('!play {NomMusique}')
  .addField('!skip')
  .addField('!volume {0/100}')
  .addField('!queue')
  
  channel.send(

}