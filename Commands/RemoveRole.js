module.exports = {
  //example of the command !RemoveRole name

  //name of the command 
  name: "removerole",
  //description of the command
  description: "Removes a role ",
  //execute is the function that gets ran when the file is called
  execute(message,args){
    
         //Check to see if the message sender has the owner role or manage roles
         let ownerRole = message.member.roles.find(rol => rol.name === "Owner");
         let manRole = message.member.roles.find(rol => rol.name === "Manage Roles");
         // if sender dies not have owner role 
         if((ownerRole === null) && (manRole === null)){
             // return error
             return message.channel.send(`Error: ${message.member} you not have one or both of the following roles Owner or Manager Roles`);
   
         }

    //declare variables 
    let member; // member is the member who is getting the role
    let rolename;//rolename is the name passed in by the user
    let memberloc // memberloc is the loction in the args array where the membersname begains
    // declaring a member name which is the name passd in my the user
     let memname; 

     //loop though the role name part of the args array
     
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
        memberloc= i+1;
        break;
        
      }
     
    }
  // loop though the last part  of the args array to get members name
  for(j= memberloc;j< args.length;j++){

    //if set the first word of the members name set it equal to memname
    if(j === memberloc){
      memname= args[memberloc];
     
  }
  //else (there is more than one word) and add it to the end
  else{
   memname= memname + " "+args[j];
 
 
}

  }
  
  
    if(!memname){
     //set the menber that sent the message
      member = message.member;
    }
    else{
      // sets the member based on the members name
       member = message.guild.members.find('displayName', memname);
       //if there is no member with the name
       if (member === null){
         // return an error
        return  message.channel.send(`Error there is no member on this server by the name of ${memname}`);
       }
     }
    //if no role  given output and error
    if(!rolename){

      return message.channel.send('Error: there is no role name given ');
  }
   // if the user is trying to add the owner role output message saying the can't do that 
   if (rolename === "Owner"){
    return message.channel.send(`The role ${rolename} can not be removed `)
  }
  if((manRole !=null && rolename === "Manage Roles") || (manRole!= null && rolename === "Manage Channels")){
    return message.channel.send(`Error  ${rolename} can not be removed from your self `);
  }
  
  
  if((rolename === "@everyone")||(rolename === "JLK BOT")){
    return message.channel.send(`Error ${rolename} is a role that can not be removed from ${member} `);
  }

      //check to see if the role exists
      let myRole = message.guild.roles.find(rol => rol.name === rolename);
      
      //check to see if the member has the role
      let memberRole = member.roles.find(rol => rol.name === rolename);
    
      

      //if the role exists and the member has the role (myRole! = null)
      if((myRole !=null) &&(memberRole != null)){

         // remove the role to user that sent the message
        member.removeRole(myRole)

        //output an message to console

        .then(message.channel.send(`the role ${myRole} was removed form ${member} `))

        //output error if there is any
        .catch(console.error);
      }
      else{
        //output an error messages
        message.channel.send(`Error: the role ${rolename} does not exist or is not a role that ${member} has`);

      }



      //QA AW: Consider adding the error if statement from AddRole to show user that there was an error


  }
}
