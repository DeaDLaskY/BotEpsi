exports.run = async (client, message, args) => {
  let roleID = "501312575812796418";
let membersWithRole = message.guild.roles.get(roleID).members;
console.log(`Got ${membersWithRole.size} members with that role.`);
  console.log(membersWithRole)
}