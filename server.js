const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
const ownerID = '261486733059817475'
const ms = require('parse-ms');
/* global Map*/
const active = new Map();
let cooldown = new Set();
let cdsecondes = 20;
var lol = require('lol-js');
var lolClient= lol.client({
  apiKey:"RGAPI-30a720d7-8836-41e1-9bf6-aa5cddb03a96",
  
})


const serverStats = {
    totalUsersID: '502091188644478991',
    OnlineID: '502091290738163714'
}

client.on('ready', () => {
  console.log('-------------------------------')
  console.log('        EPSI Bot Online        ')
  console.log('-------------------------------')
  client.user.setActivity('!help')
})
client.on("presenceUpdate", (members) => {
members = members.guild.members.array();
var count = 0;
for (var i = 0; i < members.length; i++) { if(members[i].user.presence.status !== "offline") count++; }
  client.channels.get(serverStats.OnlineID).setName(`Online: ${count}`)
})
//-------------------------------New Member----------------------------------------------------------//
client.on("guildMemberAdd", member => {
    if (member.guild.id !== serverStats.guildID) return;
  client.guild.channels.get('495190443928059904').send('**' + member.user.username + '**, has joined the server!');
	client.channels.get(serverStats.totalUsersID).setName(`Total Utilisateurs : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Humains : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bots : ${member.guild.members.filter(m => m.user.bot).size}`);

  
})
//--------------------------------Bye Bye------------------------------------------------------------//
client.on("guildMemberRemove", member =>{
	client.guild.channels.get('c495190443928059904').send('**' + member.user.username + '**, has left the server');
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(`Total Utilisateurs : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Humains : ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bots : ${member.guild.members.filter(m => m.user.bot).size}`);

})

client.on('message',message =>{
  let msg = message.content.toUpperCase();
	let sender=message.author;
	let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
	if (message.channel.type==="dm") return;
  if (!msg.startsWith(prefix)) return;
	if (message.author.bot) return;
 try {
  delete require.cache[require.resolve(`./commands/${cmd}.js`)];
  let ops = {
    ownerID: ownerID,
    active: active
  }
  let commandFile = require(`./commands/${cmd}.js`);
  commandFile.run(client, message, args, ops);

  } catch (e) {
  console.log(e.stack);
  }  finally {
    console.log(`${message.author.tag} a utilisé la commande ${cmd}`);}
  if (msg === prefix+'ping'){
    message.channel.send('Pong!')
  }
  const talkedRecently = new Set();
  if (talkedRecently.has(message.author.id))
  return;
// Adds the user to the set so that they can't talk for 2.5 seconds
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after 2.5 seconds
  talkedRecently.delete(message.author.id);
}, 2500);
  const parlage = message.guild.roles.get("name", "Piplette")
})

















client.login(process.env.TOKEN)


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);