exports.run = async (client, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  if (!fetched) return message.channel.send('Aucune musique n\'est jouee pour le moment');
  
  if (message.member.voiceChannel == message.guild.me.voiceChannel) return message.channel.send('Tu n\'est pas connecté à un channel vocal');
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil(userCount/2);
  
  if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Tu as déja voté. ${fetched.queue[0].voteSkips.length}/${required} requis pour skip`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required) {
    message.channel.send('Musique suivante!');
    return fetched.dispatcher.emit('end');
  }
  
  message.channel.send(`Tu as voté pour skip.${fetched.queue[0].voteSkips.length}/${required} requis pour skip `)
  
  










}