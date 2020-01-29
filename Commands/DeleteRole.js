module.exports = {
    //name of the command
    name: "Delete Role",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        msg.guild.roles.find(rol => rol.name === args[1]).delete();
       
    }

}
