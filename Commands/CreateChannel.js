module.exports = {
    //example of the command !Createchannel

    //name of the command
    name: "createchannel",
    //description of the command
    description: "Creates a new text Channel",
    //execute is the function that gets ran when the file is called
    execute(message,args){

        //Check to see if the message sender has the owner role or manage roles
        let ownerRole = message.member.roles.find(rol => rol.name === "Owner");
        let chRole = message.member.roles.find(rol => rol.name === "Manage Channels");
        let channelType;
        // if sender dies not have owner role 
        if((ownerRole === null) && (chRole === null)){
            // return error
            return message.channel.send(`Error: ${message.member} you not have one or both of the following roles Owner or Manage Channels`);
  
        }


        //check to see if there is a second argument if not outputs error
        if(!args[1]){

            return message.reply('Error Please enter two arguments');
        }

        // set channel Name to name passed in
        let channelname;

        for(i=1;i < args.length;i++){
            //if  args[i] is not the flag charector
            if(args[i]!= ","){
                //if i is one
               if(i === 1){
                   // channelname is equal to args[i]
                   channelname= args[i];
               }
               //else i is not 1 channel name equals the catination of the channel name prevously and args[i]
                else{
                    channelname= channelname + " "+args[i];
               }
            }
            // else it is the flag charector channel type is equal to args[i + 1]
            else{
                channelType = args[i+1].toLowerCase();
                i++
            }
    
            
        }
        // if there is no channel type given
        if(!channelType){
           return message.channel.send(`Error: no channel type given`)
        }

      

    

        // call the create role function
        message.guild.createChannel( channelname,{ //QA-ZACH: this current allows the user to exceed the max character limit, but does not inform the user that they did preventing the creation of the channel 

            type:channelType 
        // outputs error message that the role was created
        }).then(channel =>
            {
            channel.setParent(message.guild.channels.find(c => c.name == "Jlk Bot Channels"));
            console.log('Channel created');}
        ).catch(console.error)

    }

}
