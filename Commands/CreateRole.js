module.exports = {
    //example of the command !CreateRole Cat #133acf

    //name of the command 
    name: "CreateRole",
    //description of the command
    description: "Creates a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //check to see if there is a second argument if not outputs error
        if(!args[1]){
            
            return message.reply('Error Please enter two arguments');
        }
        //check to see if there is a third argument if not outputs error
        if(!args[2]){
            return message.reply('Error Please enter three arguments');
        }

        // set roleName to name
        const Name = args[1];
        //set color to the role color passed in 
        const color = args[2];
        // call the create role function
        message.guild.createRole({
            name: Name,
            color: color,
        // outputs error message that the role was created
        }).then(role => console.log('Role created'))
        .catch(console.error)
        
    }

}