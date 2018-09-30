exports.run = async (client, message, args) => {
  var epsirole = '49524826111711643'
  const channel = message.guild.channels.find("name", "bienvenue");
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
    const reactivité = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id,
        reactcollect = msg.createReactionCollector(reactivité)
  })
  

  
  
  message.member.addRole(epsirole)
  message.author.send('Le role epsi t\'a été attribué')
  
  
  



}