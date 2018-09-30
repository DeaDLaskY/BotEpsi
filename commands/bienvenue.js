exports.run = async (client, message, args) => {
  const channel = client.channels.find('name', 'bienvenue')
  
  
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
    
  
  })










}