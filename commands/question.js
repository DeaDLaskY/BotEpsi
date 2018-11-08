exports.run = async (client, message, args, ops) => {
  const Discord = require('discord.js')
  
  if(!message.member.roles.find("name", "Créateur", "Modos")){
				message.channel.send('Tu n\'as pas les droits pour ca')
				return;
			}
  const question = new Discord.RichEmbed()
  .setTitle('Hello!!')
  .addField('Question?','Oui')
  
  message.channel.send({question})
    
}