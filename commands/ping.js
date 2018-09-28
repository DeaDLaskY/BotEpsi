exports.run = async (client, message, args) => {
  
   const m = await message.channel.send("Ping?");
    m.edit(`Pong! La latence est de: ${m.createdTimestamp - message.createdTimestamp}ms. Latence de l'API:  ${Math.round(client.ping)}ms`);






}