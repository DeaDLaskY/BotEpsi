exports.run = async (client, message) => {
  message.channel.send('Le bot est on depuis ' + `${(client.uptime/1000)} secondes`+` soit ${(client.uptime/3600000)} heures`);
}