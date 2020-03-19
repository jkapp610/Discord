
  module.exports = {
    //example of the command !RemoveRole name

    //name of the command 
    name: "removerole",
    //description of the command
    description: "Removes a role ",
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
       
        //check to see if the role exists
        let myRole = message.guild.roles.find(rol => rol.name === args[1]);
        
        //check to see if the member has the role
         let memberRole = message.member.roles.find(rol => rol.name === args[1]);

        //if the role exists and the member has the role (myRole! = null)
        if((myRole !=null) &&(memberRole != null)){

           // remove the role to user that sent the message
          member.removeRole(myRole)

          //output an message to console

          .then(message.channel.send(`the role ${myRole} was removed form ${member} `))

          //output error if there is any
          .catch(console.error);
        }
        else{
          //output an error messages
          message.channel.send(`Error: the role ${args[1]} does not exist or is not a role that ${member} has`);

        }



        //QA AW: Consider adding the error if statement from AddRole to show user that there was an error


    }
  }