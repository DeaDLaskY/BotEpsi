exports.run = async (client, message, args) => {
  const channel = message.guild.channels.find("name", "bienvenue");
  channel.send('EPSI').then(message =>{
    message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 50, time: 60000, errors: ['time']})
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.username.addRole('495248261117116437');
           message.channel.send('Tu as bien recu le role epsi')
        }
        else {
            message.channel.send('NOO');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
    });
      
    
    })
  

  

  
  
  



}