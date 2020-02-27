module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command 
    name: "createrole",
    //description of the command
    description: "Creates a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //set  name and color
        let name = args[1];
        let color = args[2];
        
        
        //check to see if there is a role name is passed in 
        //if not return an error
        if(!name){
            
            return message.channel.send('Error: there is no role name given ');
        }
        //check to see if the role already exists
        const Role = message.guild.roles.find(rol => rol.name === name);
        //if it does retun error
        if(Role != null){
            return message.channel.send(`Error: the role ${Role} already exists`);

        }

        //check to see if  a third argument is passed in
        //if not set color to a defult color
        if(!color){
            //set color to a default
            color = "#000000";//hex code for gray

        }
        else{
             //set color to uppercase
            color= color.toUpperCase();
          }
         // call the create role function
        message.guild.createRole({
            name: name,
            color: color,
        // outputs message that the role was created or an error if there were any
        
        }).then((mess) => {
            message.channel.send(`Role ${mess} Created`)})
        .catch(console.error)

        
        }
       

}



