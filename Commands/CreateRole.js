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
            // call check color if it returns false 
            if (checkcolor(usercolor) === false){
                //return(exit command)
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
            // array of accepted colors 
           const colors = ['RED','GREEN','WHITE','BLACK',"BLUE"];
           //bool to keep track of if the color is accepted
           var bool = false;
           //if the color is a hex
           if(color.startsWith('#')){
               //return 
               return;
           }
           // otherwise loop though the  accepted color array
           for(i=0;i<colors.length;i++){
               //if the color is in the array
               if(color === colors[i]){
                   //bool equals true
                   bool = true;
               }
           }
           //if bool = false output error
            if(bool === false){
                // error message 
                message.channel.send(`${color} is not a color that is recinized`);
                //returm false
                return false;
            }
           

        }

        
        }
       

}



