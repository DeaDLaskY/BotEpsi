exports.run = async (client, message, args) => {
  const channel = message.guild.channels.find("name", "bienvenue");
  
  client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        console.log(reaction.users);
      let roleepsi = message.guild.roles.get('495887624565817344')
      reaction.users.addRole(roleepsi)
    }
});
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
  })










}