exports.run = async (client, message, args) => {
  const channel = message.guild.channels.find("name", "bienvenue");
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
    const reactivité = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id,
        reactcollect = msg.createReactionCollector(reactivité, {time: 600000000})
    reactcollect.on('collect',r => {
      message.member.addRole('495248261117116437')
      message.author.send('Le role epsi t\'a été attribué')
    
    })
  })
  

  

  
  
  



}