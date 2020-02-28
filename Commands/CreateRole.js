module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command 
    name: "createrole",
    //description of the command
    description: "Creates a role ",
    //execute is the function that gets run when the file is called
    execute(message,args){
        //set  name and color
        let name = args[1];
        let usercolor = args[2];
        
        
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

        //check to see if a third argument is passed in
        //if not set color to a defult color
        if(!usercolor){
            //set color to a default
            usercolor = "#000000";//hex code for black

        }
        else{
             //set color to uppercase
            usercolor= usercolor.toUpperCase();
            if (checkcolor(usercolor) === false){
                return
            }
          }
      
       
         // call the create role function
        message.guild.createRole({
            name: name,
            color: usercolor,
        // outputs message that the role was created or an error if there were any
        
        }).then((newrole) => {
            message.channel.send(`Role ${newrole} Created`)})
        .catch(console.error)

        function checkcolor(color){
           const colors = ['RED','GREEN','WHITE','BLACK',"BLUE"];
           var bool = false;
           if(color.startsWith('#')){
               return;
           }
           for(i=0;i<colors.length;i++){
               if(color === colors[i]){
                   bool = true;
               }
           }
            if(bool === false){
             
                message.channel.send(`${color} is not a color that is recinized`);
                return false;
            }
           

        }

        
        }
       

}



