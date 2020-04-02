module.exports = {
    //name of the command
    name: "deleterole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){
        //if no role  given output and error
        if(!args[1]){
            
            return message.channel.send('Error: there is no role name given ');
        }
        //declare name variable
        let name;

        for(i=1;i < args.length;i++){
              //if set the first word of role equal to name
               if(i === 1){
                   name= args[i];
               }
               //else (there is more than one wo)
               else{
                name= name + " "+args[i];
              
            }
        }
        

            
        


            //set the role

            let myRole = message.guild.roles.find(rol => rol.name === name);
          
            //if the role exists (myRole! = null)
            if(myRole !=null){
           // delete the role 
            myRole.delete(myRole)
            //output message to thr console
            .then(
                message.channel.send(`Role ${name} deleted`))
            //output error message
            .catch(console.error);
            }
            //else send an error message to user
            else{
              message.channel.send(`Error: the role ${name} does not exist`);
    
            }
        
    }

}
