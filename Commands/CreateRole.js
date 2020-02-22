module.exports = {
    //example of the command !CreateRole Cat BLUE

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
            return message.reply('Error Please enter three arguments'); //QA AW: Instead of replying with this error, you could have it just set the color to the default role color in Discord
        }

        // set roleName to name passed in
        const Name = args[1];
        //set color to the role color passed in 
        const color = args[2].toUpperCase();
        // call the create role function
        message.guild.createRole({
            name: Name,
            color: color,
        // outputs error message that the role was created
        }).then(role => console.log('Role created'))
        .catch(console.error)
        
    }

}