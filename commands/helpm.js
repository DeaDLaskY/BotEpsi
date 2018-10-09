const Discord = require('discord.js')
exports.run = async(client, message, args) =>{
  const embed = new Discord.RichEmbed()
  .title = ("Commandes Musique")
  .setColor = (0x00AE86)
  .addField('!play {NomMusique}')
  .addField('!skip')
  .addField('!volume {0/100}')
  .addField('!queue')
  
  message.channel.send({embed})

}