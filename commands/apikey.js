exports.run = (client, message, args) => {
  if(!args[0]) return message.channel.send("La clé d'API sil te plait")
  const APIKEY = args[0]
  return message.channel.send(APIKEY)

}