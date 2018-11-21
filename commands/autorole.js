exports.run = async (client, message, args) => {
  
  let roles = {'B1':'roleB1',
               B1Gr1',
               'B1Gr2',
               'B2',
               'B3',
               'B3Gr1',
               'B3Gr2',
               'I4','I4Gr1','I4Gr2','I5','I5Gr1','I5Gr2','BDE','EPSI','WIS'}
  if(!args[0]) return message.channel.send('spécifie un rôle attribuer')
  if (args[0] = roles){
    message.channel.send('Tu as le rôle '+args[0]+' !')
  }










}