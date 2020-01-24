module.exports = {
    //name of the command 
    name: "CreateRole",
    //description of the command
    description: "Creates a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //bot calls the create rule function
        if(!args[1]){
            return message.reply('Error Please enter two arguments');
        }
        // set roleName to name
        const Name = args[1];
        message.guild.createRole({
            name: Name,
            color: '#67887d',
        // outputs error message that thw role was created
        }).then(role => console.log('Role created'))
        .catch(console.error)
        
    }

}