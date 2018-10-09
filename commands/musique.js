exports.run = async (client, message, args) => {
  
  if(!message.member.roles.find("name", "The King", "Modos")){
				message.channel.send('Tu n\'as pas les droits pour ca')
				return;
			}
  message.channel.send("Qui veut un bot musique?").then(message => {
    message.react("👍").then(() => message.react('👎'))
  
  
  })









}