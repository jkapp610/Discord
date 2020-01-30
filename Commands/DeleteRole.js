module.exports = {
    //name of the command
    name: "DeleteRole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        // finds the role and deletes role
        message.guild.roles.find(rol => rol.name === args[1]).delete();
       
       
    }

}
