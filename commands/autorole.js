exports.run = async (client, message, args) => {
  
  const roles = {'B1':'role1',
               'B1Gr1':'role2',
               'B1Gr2':'role3',
               'B2':'role4',
               'B3':'role5',
               'B3Gr1':'role6',
               'B3Gr2':'role7',
               'I4':'role8',
               'I4Gr1':'role9',
               'I4Gr2':'role10',
               'I5':'role11',
               'I5Gr1':'role12',
               'I5Gr2':'role13',
               'BDE':'role14',
               'EPSI':'role15',
               'WIS':'role16'}//
  if(!args[0]) return message.channel.send('spécifie un rôle attribuer')
  if (args[0] = roles){
    message.channel.send('Tu as le rôle '+args[message.content]+' !')
    console.log(roles[message.content])
  }









}