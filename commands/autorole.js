exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
  
  if(!args[0]) return message.channel.send('spécifie un rôle attribuer')
  if(!message.member.roles.find("name", "Créateur", "Modos", "nouveau")){
				message.channel.send('Tu n\'as pas les droits pour ca')
				return;
			}
   
  
  if (args[0] === 'B1'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
              let roleB1Gr1 = client.guild.roles.find('name','B1Gr1')
              message.author.addRole(roleB1)
              
            } else if (message.content == "Grp2") {
                message.channel.send("Tu as les roles B1 et Grp2");
              let roleB1Gr2 = client.guild.roles.find('name','B1Gr2')
              message.author.addRole(roleB1Gr2)
            }
          let roleB1 = client.guild.roles.find('name','B1')
              message.author.addRole(roleB1)
  }
)}
  if (args[0] === 'B2'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}
    if (args[0] === 'B3'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}
    if (args[0] === 'I4'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}
    if (args[0] === 'I5'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}  if (args[0] === 'Epsi'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}
    if (args[0] === 'WIS'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}
  if (args[0] === 'BDE'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
  }
)}






















































}