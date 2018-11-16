exports.run = async (client, message, args) => {
  message.delete()
  const ascii = require('ascii-art');
  ascii.font(args.join(' '),'Doom', function(rendered){
  rendered=rendered.trimRight();
  message.channel.send(rendered, {
    code:'md'
  })
    
  });



}