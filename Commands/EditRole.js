module.exports = {
    //name of the command
    name: "EditRole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        const myRole = message.guild.roles.find(rol => rol.name === args[1]);
        const originalName = args[1];
        const newName = args[2];
      
       // Edit name of a role
     myRole.edit({name: newName })
    .then(update => console.log('Changed'))
    .catch(console.error)

       
    }

}
