module.exports = {
    //name of the command
    name: "deleterole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
    
        //Check to see if the message sender has the owner role or manage roles
        let ownerRole = message.member.roles.find(rol => rol.name === "Owner");
        let manRole = message.member.roles.find(rol => rol.name === "Manage Roles");
        // if sender dies not have owner role 
        if((ownerRole === null) && (manRole === null)){
            // return error
            return message.channel.send(`Error: ${message.member} you not have one or both of the following roles Owner or Manager Roles`);
  
        }
        //if no role  given output and error
        if(!args[1]){
            
            return message.channel.send('Error: there is no role name given ');
        }
        //declare name variable
        let name;

        for(i=1;i < args.length;i++){
              //if set the first word of role equal to name
               if(i === 1){
                   name= args[i];
               }
               //else (there is more than one wo)
               else{
                name= name + " "+args[i];
              
            }
        }
       

        if((name === "@everyone")||(name === "JLK BOT") ||(name === "Owner")){
            return message.channel.send(`Error ${name} is a role that can not be deleted from the server `);
          }
        


            //set the role

            let myRole = message.guild.roles.find(rol => rol.name === name);
          
            //if the role exists (myRole! = null)
            if(myRole !=null){
           // delete the role 
            myRole.delete(myRole)
            //output message to thr console
            .then(
                message.channel.send(`Role ${name} deleted`))
            //output error message
            .catch(console.error);
            }
            //else send an error message to user
            else{
              message.channel.send(`Error: the role ${name} does not exist`);
    
            }
        
    }

}
