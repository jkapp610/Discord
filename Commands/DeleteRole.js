module.exports = {
    //name of the command
    name: "deleterole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        //if no role  given output and error
        if(!args[1]){
            
            return message.channel.send('Error: there is no role name given ');
        }
            //set the role

            let myRole = message.guild.roles.find(rol => rol.name === args[1]);
          
            //if the role exists (myRole! = null)
            if(myRole !=null){
           // delete the role 
            myRole.delete(myRole)
            //output message to thr console
            .then(
                message.channel.send(`Role ${args[1]} deleted`))
            //output error message
            .catch(console.error);
            }
            //else send an error message to user
            else{
              message.channel.send(`Error: the role ${args[1]} does not exist`);
    
            }
        
    }

}
