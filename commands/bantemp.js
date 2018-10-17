exports.run = (client, message, args) => {
  let myRole = message.guild.roles.get('501312575812796418');
  console.log(myRole)
  if(message.member.roles.has(myRole)) {
  console.log(`Yay, the author of the message has the role!`);
  message.channel.send("...")
} else {
  console.log(`Nope, noppers, nadda.`);
  message.channel.send('!!')
}







}



