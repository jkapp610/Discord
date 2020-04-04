module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command
    name: "deletechannel",
    //description of the command
    description: "Deletes current channel",
    //execute is the function that gets ran when the file is called
    execute(message,args){

      //Check to see if the message sender has the owner role or manage roles
      let ownerRole = message.member.roles.find(rol => rol.name === "Owner");
      let chRole = message.member.roles.find(rol => rol.name === "Manage Channel");
      // if sender dies not have owner role 
      if((ownerRole === null) && (chRole === null)){
          // return error
          return message.channel.send(`Error: ${message.member} you not have one or both of the following roles Owner or Manager Channel`);

      }


        //check to see if there is a second argument if not outputs error
        if(!args[1]){

            return message.reply('Error Please enter two arguments');
        }


         // set channel Name to name passed in
         let channelname;

         for(i=1;i < args.length;i++){
             
                 //
                if(i === 1){
                    channelname= args[i];
                }
             
                else{
                 channelname= channelname + "-"+args[i];
                }
     
             
         }

        //sets the channel name passed in by user
        let mychannel = message.guild.channels.find(ch => ch.name === channelname);
        // if channel exists 
        if(mychannel != null){
            // call the Deleate role
            mychannel.delete()
             // outputs error message that the role was created
            .then(role => console.log('Channel Deleted'))
            .catch(console.error)
        }
        else{
            message.channel.send(`Error there is no channel named ${channelname}`);
        }

    }

}
