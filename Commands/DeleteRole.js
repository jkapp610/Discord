module.exports = {
    //name of the command
    name: "DeleteRole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        //if no role  given output and error
        if(!args[1]){
            
            return message.channel.send('Error: there is no role name given ');
        }

        // finds the role and deletes role
        message.guild.roles.find(rol => rol.name === args[1]).delete();
       
       
    }

}
