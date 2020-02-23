module.exports = {
    //name of the command
    name: "editrole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        // if there is no origanl name given output error
        if(!args[1]){
            return message.channel.send('Error: there is no original role name given ');
             }
        //output and error if no new role name is given
        if(!args[2]){
            return message.channel.send('Error: there is no new role name given ');
            
        }
        //Set the role that needs to be changed
        const myRole = message.guild.roles.find(rol => rol.name === args[1]);
        //set the new name
        const newName = args[2];
        //if the role exists (myRole! = null)
        if(myRole!= null){
            // Edit name of a role
            myRole.edit({name: newName })
            .then(console.log(`The role ${args[1]} was changed to ${args[2]}`))
            .catch(console.error)
        }
        else{
            //output a message error message
            message.channel.send(`Error: the role ${args[1]} does not exist`); 
        }
      
     

       
    }

}
