exports.run = async (client, message, args) => {
  const Discord = require('discord.js')
  
  
  let member = message.mentions.members.first();
  if (!member) return message.channel.send('Syntaxe Corecte: !autorole @Pseudo Role\nroles: B1,B2,B3,I4,I5,EPSI,WIS,BDE')
  if(!args[1]) return message.channel.send('Syntaxe Corecte: !autorole @Pseudo Role\nroles: B1,B2,B3,I4,I5,EPSI,WIS,BDE')
   
 
  if (args[1] === 'B1'){
    
     message.channel.send('Grp1 ou Grp2?')
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 20000 });
        collector.on('collect', message => {
            if (message.content == "Grp1") {
                message.channel.send("Tu as les roles B1 et Grp1");
              let roleB1Gr1 = message.guild.roles.find('name','B1Gr1')
              member.addRole(roleB1Gr1)
              console.log(message.author.id)
              
            } else if (message.content == "Grp2") {
                message.channel.send("Tu as les roles B1 et Grp2");
              let roleB1Gr2 = message.guild.roles.find('name','B1Gr2')
              member.addRole(roleB1Gr2)
            }
          let roleB1 = message.guild.roles.find('name','B1')
              member.addRole(roleB1)
  }
)}
  if (args[1] === 'B2'){
    
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