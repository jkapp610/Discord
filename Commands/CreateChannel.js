module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command
    name: "createchannel",
    //description of the command
    description: "Creates a new text Channel",
    //execute is the function that gets ran when the file is called
    execute(message,args){


        //check to see if there is a second argument if not outputs error
        if(!args[1]){

            return message.reply('Error Please enter two arguments');
        }


        // set channel Name to name passed in
        const Name = args[1];

        // call the create role function
        message.guild.createChannel( Name,{ //QA-ZACH: this current allows the user to exceed the max character limit, but does not inform the user that they did preventing the creation of the channel 

            type: "text"
        // outputs error message that the role was created
        }).then(channel =>
            {
            channel.setParent(message.guild.channels.find(c => c.name == "Jlk Bot Channels"));
            console.log('Channel created');}
        ).catch(console.error)

    }

}
