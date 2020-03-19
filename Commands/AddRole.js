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
        //declare a member 
        let member;
        if(!args[2]){
         //set the menber that sent the message
          member = message.member;
        }
        else{
          // declaring a member name
          let memname;
          //if the name does not have a space 
          if(!args[3]){
            //set memname to args[2]
            memname = args[2];

          }
          // else
          else{
            //set memname to args 2 and ard args[3]
            memname = args[2]+ " "+args[3];

          }
          
          // sets the member based on the members name
           member = message.guild.members.find('displayName', memname);
           //if there is no member with the name
           if (member === null){
             // return an error
            return  message.channel.send(`Error there is no member on this server by the name of ${memname}`);
           }



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
