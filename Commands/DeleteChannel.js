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


         // declare the channelname
         let channelname;

         for(i=1;i < args.length;i++){
             
                 //if i is equal to 1
                if(i === 1){
                    //set chanelname equal to args ant index i
                    channelname= args[i];
                 }
                //else chanelname equals the the catanination of the channel name and args at index i (with a dash)
                else{
                 channelname= channelname + "-"+args[i];
                }
     
             
         }

        //sets the channel name passed in by user
        let mychannel = message.guild.channels.find(ch => ch.name === channelname);
        // if channel exists 
        if(mychannel != null){
            // call the Deleate channel
            mychannel.delete()
             // outputs  message that the channelwas created
            .then(message.channel.send('Channel Deleted'))
            .catch(console.error)
        }
        // else if channel name is equal to null means that it is either not a channel on the server or it is a voice channel
        else{
            //for loop to to loop though the args array and construct the voice channel name
            for(i=1;i < args.length;i++){
             
                //if i is equal to 1
               if(i === 1){
                    //set chanelname equal to args ant index i
                   channelname= args[i];
               }
                //else chanelname equals the the catanination of the channel name and args at index i (with a space)
               else{
                channelname= channelname + " "+args[i];
               }
    
            
        }
        // check to see if channel voice name is equal to what the user passed ib
        let mychannelvoice = message.guild.channels.find(ch => ch.name === channelname);
        //of the channel exists 
        if(mychannelvoice !=null){
            // call the Deleate role
            mychannelvoice.delete()
             // outputs error message that the role was created
            .then(message.channel.send('Channel Deleted'))
            .catch(console.error)
        }
        //else channel is not on the surever
        else{
            message.channel.send(`Error there is no channel named ${channelname}`);
        }
        }

    }

}
