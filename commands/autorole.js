exports.run = async (client, message, args) => {
  const Discord = require('
  
  if(!args[0]) return message.channel.send('spécifie un rôle attribuer')
   
  
  if (args[0] === 'B1'){
    
     message.author.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
                     )}}