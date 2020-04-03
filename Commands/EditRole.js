
module.exports = {
    //name of the command
    name: "editrole",
    //description of the command
    description: "Delete role from channel",
    //execute is the function that will run when the file is called
    execute(message,args){

    //set the new name
    let newName;
    let rolename;
    let newnameloc
    let usercolor
    for(i=1;i < args.length;i++){
        //if index is Not flag charector (, tells you when you have reached the end of name) 
        if(args[i]!= ","){
            //if it is the first word of the role name set it equal to rolename
           if(i === 1){
               rolename= args[i];
           }
           // if it is not the first word of the role name add it to the end of the rolename
           else
            rolename= rolename + " "+args[i];
            //message.channel.send(`this is name at index${i} is ${name}` );
        }
        //if it is the flag charector
        else{
          // set memloc to i + 1 and break out the loop
          newnameloc= i+1;
          break;
          
        }
       
      }
    // loop though the last part  of the args array to get members name
    for(j= newnameloc;j< args.length;j++){

        //if set the first word of the members name set it equal to memname
       
        if(j === newnameloc){
            newName= args[newnameloc];
       
        }
        //else (there is more than one word) and add it to the end
        else{
             newName= newName + " "+args[j];
        }
    }
       

    
    



        // if there is no origanl name given output error
        if(!rolename){
            return message.channel.send('Error: there is no original role name given ');
             }
        //output and error if no new role name is given
        if(!newName){
            return message.channel.send('Error: there is no new role name given ');
            
        }
        //Set the role that needs to be changed
        let myRole = message.guild.roles.find(rol => rol.name === rolename);
        
        //if the role exists (myRole! = null)
        if(myRole!= null){
            // Edit name of a role
            myRole.edit({name: newName })
            .then(newrole=>{
                message.channel.send(`The role ${rolename} was changed to ${newrole}`)})
            .catch(console.error)
        }
        else{
            //output a message error message
            message.channel.send(`Error: the role ${rolename} does not exist`); 
        }

        
      
    
      
        
       
    }

}
