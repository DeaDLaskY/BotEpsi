exports.run = async (client, message, args) => {
  const channel = message.guild.channels.find("name", "bienvenue");
  
  client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅") {
        console.log(reaction.users);
      let role = message.guild.roles.find("name", "Epsi");
 
// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
 
// or the person who made the command: let member = message.member;
 
// Add the role!
member.addRole(role).catch(console.error);
 
    }
});
  channel.send('EPSI').then(msg =>{
    msg.react('✅')
  })










}