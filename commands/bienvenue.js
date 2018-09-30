exports.run = async (client, message, args) => {
  const channel = message.guild.channels.find("name", "bienvenue");
  
  
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
    if (msg.user.react === '✅'){
      var role = client.guild.role.find('name', 'EPSI')
      msg.addRole(role)
    }
    
  
  })










}