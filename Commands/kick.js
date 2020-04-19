module.exports = {
    //name of the command
    name: "kick",
    //description of the command
    description: "says good bye",
    //execute is the function that will run when the file is called
    execute(message,args){

    //Check to see if the message sender has the owner role or manage roles
    let ownerRole = message.member.roles.find(rol => rol.name === "Owner");

    if((ownerRole === null)){
        // return error
        return message.channel.send(`Error: ${message.member} you do not have the role of Owner \n ONLY THE OWNERS CAN RUN THIS COMMAND`);

    }


         //declare variables 
         let member; // member is the member who is getting the role
         // declaring a member name which is the name passd in my the user
         let memname; 
        // set the member name passed in by the user
         for(j= 1;j< args.length;j++){

            //if set the first word of the members name set it equal to memname
            if(j === 1){
              memname= args[j];
             
          }
          //else (there is more than one word) and add it to the end
          else{
           memname= memname + " "+args[j];
         
         
       }
    
          }
        
        if(!memname){
        //set the menber that sent the message
             member = message.channel.send(`Error no member name given `);
           }
           else{
             // sets the member based on the members name
              member = message.guild.members.find('displayName', memname);
              //if there is no member with the name
              if (member === null){
                // return an error
               return  message.channel.send(`Error there is no member on this server by the name of ${memname}`);
              }
              if (member === message.member){
                  return message.channel.send(`Error you can't kick your self out of the surnver silly`)


              }
            }
            member.kick('you were kicked').then(
                message.channel.send(`${member} was kicked from the surver`))
                .catch(console.error);





















    }

}
