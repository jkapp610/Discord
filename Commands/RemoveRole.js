
  module.exports = {
    //example of the command !RemoveRole name

    //name of the command 
    name: "RemoveRole",
    //description of the command
    description: "Removes a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //get the menber that sent the message
        let member = message.member;
           //if no role  given output and error
           if(!args[1]){
            
            return message.channel.send('Error: there is no role name given ');
        }
        //set the role
        let myRole = message.guild.roles.find(rol => rol.name === args[1]);
        //if the role exists (myRole! = null)
        if(myRole !=null){
           // remove the role to user that sent the message
          member.removeRole(myRole).catch(console.error);
        }
        else{
          message.channel.send(`Error: the role ${args[1]} does not exist`);

        }



        //QA AW: Consider adding the error if statement from AddRole to show user that there was an error


    }
  }