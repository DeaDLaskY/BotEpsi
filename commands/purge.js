exports.run = async (client, message, args, tools) => {
  
  async function purge(){
			message.delete();

			if(!message.member.roles.find("name", "Créateur", "Modos")){
				message.channel.send('Tu n\'as pas les droits pour ca')
				return;
			}

			if (isNaN(args[0])){
				message.channel.send('Merci dutiliser un nombre comme argument.');
				return;
			}

			const fetched = await message.channel.fetchMessages({limit: args[0]});
			console.log(fetched.size + 'message found, deleting...');

			message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send('Error: ${error}'));

		}

		purge();
  message.delete();
  
}