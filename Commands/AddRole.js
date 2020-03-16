const Discord = require('discord.js');
const client = new Discord.Client();



  module.exports = {
    //example of the command !AddRole role name

    //name of the command 
    name: "addrole",
    //description of the command
    description: "Add a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //set the menber that sent the message
        let member;
        if(!args[2]){
          member = message.member;
        }
        else{
          
        member = client.users.find(user => user.username === args[2]);
          
        }
        //if no role  given output and error
        if(!args[1]){
            
          return message.channel.send('Error: there is no role name given ');
      }
        //set the role
        let myRole = message.guild.roles.find(rol => rol.name === args[1]);
        //if the role exists (myRole! = null)
        if(myRole !=null){
       // add the role to user that sent the message
        member.addRole(myRole)
        //output message to console if role was added
        .then(
          message.channel.send(`the role ${myRole} was added to ${member}`))
        //output error if it does not
        .catch(console.error);
        }
        //else send an error message to user
        else{
          message.channel.send(`Error: the role ${args[1]} does not exist`);

        }
    }
}          


